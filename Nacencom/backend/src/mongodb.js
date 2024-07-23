function createCollection(model) {
    model.createCollection().then(function (collection) {
        console.log("Collection is created!");
    });
}

async function insert(model, data) {
    try {
        const res = await model.create(data);
        return res;
    } catch (e) {
        return null;
    }
}

async function update(model, oldData, newData) {
    try {
        const res = await model.updateOne(oldData, newData);
        return res;
    } catch (e) {
        return null;
    }
}

async function del(model, id) {
    try {
        const res = await model.findOneAndDelete({ _id: id });
        return res;
    } catch (e) {
        return null;
    }
}

async function findOne(model, data) {
    try {
        const res = await model.find(data).exec();
        return res;
    } catch (e) {
        return null;
    }
}

module.exports = { createCollection, insert, update, del, findOne };
