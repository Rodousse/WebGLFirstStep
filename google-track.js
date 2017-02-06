/**
 * Created by kamis on 3/7/2016.
 */

if (window.location.hostname !== 'kamaronme.dev') {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-74726066-1', 'auto');
        ga('send', 'pageview');
} else {
        console.log('From dev machine - ignoring hit');
}