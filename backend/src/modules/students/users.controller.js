import {
  createUserSchema,
  updateUserSchema,
  listUserSchema,
} from "./user.schema.js";
import * as Service from "./users.service.js";

export async function create(req, res, next) {
  try {
    const payload = createUserSchema.parse(req.body);
    const user = await Service.create(payload);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function list(req, res, next) {
  try {
    const params = listUserSchema.parse(req.query);
    const users = await Service.list(params);
    res.json({ items: users });
  } catch (error) {
    next(error);
  }
}

export async function getById(req, res, next) {
  try {
    const user = await Service.get(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const patch = updateUserSchema.parse(req.query);
    const user = await Service.update(req.params.id, patch);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function remove(req, res, next) {
  try {
    const user = await Service.remove(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}
