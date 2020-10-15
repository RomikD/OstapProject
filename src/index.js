import './scss/index.scss'
import * as $ from 'jquery'
import 'bootstrap'

$('#your-customer a').hover(function() {
    $('#your-customer a').toggleClass('active');
});