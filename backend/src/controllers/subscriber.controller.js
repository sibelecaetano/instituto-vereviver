import * as subscriberService from "../services/subscriber.service.js";

export const createSubscriber = async (req, res) => {
  try {
    const { name, email } = req.body;
    const subscriber = await subscriberService.createSubscriberService(name, email);
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await subscriberService.getSubscribersService();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};