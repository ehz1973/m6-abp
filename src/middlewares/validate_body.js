const validateBody = (req, res, next) => {
    // Verifica que la petición tenga un body antes de continuar.
    if(!req.body){
        return res.status(400).json({message: "No se proporciona body."});
    }

    next();
}

export default validateBody;