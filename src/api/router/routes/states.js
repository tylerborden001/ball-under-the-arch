var { States } = require( "../../models" );

module.exports = function stateRouter( router ){
    router.get(
        "/states",
        async( req, res )=>{
            var states = await States.query();

            res.send( states || [] );
        }
    );
};
