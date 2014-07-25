/**
 * Created by WillieTran on 7/24/14.
 */
$(document).ready(function() {

    var fireJSON = new Firebase('https://cronut.firebaseio.com');
    var auth = new FirebaseSimpleLogin(fireJSON, function(error, user) {
        ...
    });

    auth.login('google');

});

