import Route from '@ember/routing/route';

export default Route.extend({
	//lifecycle hook like Vue/React
	beforeModel(){
		this.replaceWith('rentals')
	}
	// transitionTo() vs replaceWith()
	// replaceWith will replace the current URL
	// in the browser's history.
	// transitionTo will add to the history
});
