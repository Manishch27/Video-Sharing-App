const asyncHandler = (requestHandler)=>{

    (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).reject((err)=> console.log(err))
    }
}

export default {asyncHandler}

// const asyncHandler = async(fn)=> async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.staus(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }