import * as subscriberModel from "../models/subscriber.model.js";

export const createSubscriberService = async (name, email) => {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  return await subscriberModel.createSubscriber(name, email);
};

export const getSubscribersService = async () => {
  return await subscriberModel.getAllSubscribers();
};