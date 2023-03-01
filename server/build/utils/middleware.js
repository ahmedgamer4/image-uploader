export const errorHandler = (err, req, res, next) => {
    if (err.name === 'CastError') {
        return res.status(400).send({ err: 'Malformatted error' });
    }
    if (err.name === 'ValidationError') {
        return res.status(400).send({ err: err.message });
    }
    console.log(err.message);
    next(err);
};
export const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
};
//# sourceMappingURL=middleware.js.map