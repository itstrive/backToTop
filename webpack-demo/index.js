import $ from 'n-zepto'
import 'tiny-back'

$(function() {
	$('.backToTop').backToTop({
		type: 'tap',
		duration: 500,
		target: 0
	})
});