module.exports = {
    'post /api/login': (req, res) => {
        const result = {
            code: 200,
            data:{
                id: 123,
                name: 'HaiMeimei',
                address: '成都市天府新区华阳大道23号'
            },
            message: 'success'
        };
        res.json(result);
    }
};