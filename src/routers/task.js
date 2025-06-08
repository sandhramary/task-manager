const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/tasks", auth, async (req, res) => {
  const task = new Task({ ...req.body, owner: req.user._id });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/tasks", auth, async (req, res) => {
  let match = {};
  let sort = {};

  if (req.query.completed) match.completed = req.query.completed;
  if (req.query.sortBy) {
    const splits = req.query.sortBy.split("_");
    sort[splits[0]] = splits[1] === "asc" ? 1 : -1;
  }

  try {
    const updatedUser = await req.user.populate({
      path: "tasks",
      match,
      options: {
        limit: req.query.limit,
        skip: req.query.offset,
        sort,
      },
    });
    const tasks = updatedUser.tasks;

    // const tasks = await Task.find(
    //   { owner: req.user._id, match },
    //   {},
    //   { limit: 3, skip: 0 }
    // );
    res.send(tasks);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  const userId = req.user._id;

  try {
    const task = await Task.findOne({ _id, owner: userId });
    console.log(task);

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.patch("/tasks/:id", auth, async (req, res) => {
  const given = Object.keys(req.body);
  const allowed = ["description", "completed"];

  const isValid = given.every((item) => allowed.includes(item));
  if (!isValid) {
    return res.status(400).send({ error: "Invalid update" });
  }

  try {
    const _id = req.params.id;
    const taskToUpdate = await Task.findOne({ _id, owner: req.user._id });

    if (!taskToUpdate) return res.status(404).send();

    given.forEach((item) => (taskToUpdate[item] = req.body[item]));
    await taskToUpdate.save();

    res.send(taskToUpdate);
  } catch (e) {
    res.status(400).send();
  }
});

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedTask = await Task.findOneAndDelete({
      _id,
      owner: req.user._id,
    });

    if (!deletedTask) return res.status(404).send();
    res.send(deletedTask);
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
