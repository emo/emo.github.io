function loop(div) {
    async.forever(
        function (next) {
            div.animate({ height: '500px', opacity: '0.4' }, "slow");
            div.animate({ width: '500px', opacity: '0.8' }, "slow");
            div.animate({ height: '100px', opacity: '0.4' }, "slow");
            div.animate({ width: '100px', opacity: '0.8' }, "slow");
            next();
        },
        function (err) {
            console.error(err);
        }
    );
}
$(document).ready(function () {
    var d = $("div");
    loop(d);
});