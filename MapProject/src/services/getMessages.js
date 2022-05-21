const messages = [
  { id: 101, message: "Thank you for your purchase. Order # 432013" },
  { id: 102, message: "Your credit card statement - June 2019" },
  { id: 103, message: "New Message from Shanon" },
  {
    id: 104,
    message: "Learn about Products, features and plans at StockDirect"
  },
  { id: 105, message: "Hey! Here are the documents for the meeting" },
  { id: 106, message: "NodeMarket News : June 2019" },
  { id: 107, message: "ReactJS takes the lead - Tech News" },
  { id: 108, message: "Prime day starts tomorrow, are you ready?" }
];

const getMessages = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(messages);
    }, 1500);
  });
};

export default getMessages;
