const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
    <h2>Your Recent Order for ${total}</h2>
    <p>Please start walking over, we will have your order ready in the next 20 mins.</p>
    <ul>
      ${order
        .map(
          (item) => `<li>
        <img src="${item.thumbnail}" alt="${item.name}"/>
        ${item.size} ${item.name} - ${item.price}
      </li>`
        )
        .join('')}
    </ul>
    <!-- .join will remove any commas that get automatically added from mapping directly in an html document -->
    <p>Your total is <strong>$${total}</strong> due at pickup</p>
    <style>
        ul {
          list-style: none;
        }
    </style>
  </div>`;
}

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // access the body obj. sent from the usePizza Hook
  // console.log('🎉🎉🎉🎉running......', body);
  const body = JSON.parse(event.body);
  // console.log('⭕️body', body);

  // check if honey-pot field is filled out:
  if (body.garamMasala) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Boop beep bop zzzzst good bye err: #2016563498',
      }),
    };
  }

  // Validate the data coming in is correct
  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    // using for of vs for each bc we need to return any errors from the parent scope
    // console.log(`Checking that ${field} is good`);
    if (!body[field]) {
      // if any field does not exist -- throw an error:
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  // make sure they actually have items in that order
  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Why would you order nothing?!`,
      }),
    };
  }

  // send the email
  const info = await transporter.sendMail({
    from: "Slick's Slices <slick@example.com>",
    to: `${body.name} <${body.email}>, orders@example.com`,
    subject: 'New order!',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  // console.log(info);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
