const omise = require("omise")({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY
});

exports.paymentWithCreditCard = async (req, res, next) => {
  const { email, name, amount, token } = req.body;
  console.log(req.body);
  try {
    const customer = await omise.customers.create({
      email,
      description: name,
      card: token
    });

    const charge = await omise.charges.create({
      amount: amount,
      currency: "thb",
      customer: customer.id
    });

    return res.send({
      amount: charge.amount,
      status: charge.status,
      token: charge.transaction
    });
  } catch (error) {
    console.log(error);
  }
  next();
};
