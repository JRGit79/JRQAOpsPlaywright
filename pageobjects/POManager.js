    const {LoginPage} = require('./LoginPage');
    const {DashboardPage} = require('./DashboardPage');
    const {CheckOutPage} = require('./CheckOutPage');
    const {OrderConfirmationPage} = require('./OrderConfirmationPage');
    class POManager
    {
        constructor(page)
        {
            this.page = page;
            this.loginPage = new LoginPage(this.page);
            this.dashboardPage = new DashboardPage(this.page);
            this.checkoutpage = new CheckOutPage(this.page);
            this.orderconfirmationpage = new OrderConfirmationPage(this.page);
        }

        getLoginPage()
        {
            return this.loginPage;
        }
        getDashboardPage()
        {
            return this.dashboardPage;
        }
        getCheckOutPage()
        {
            return this.checkoutpage;
        }
        getOrderConfirmationPage()
        {
            return this.orderconfirmationpage;
        }
    }
    module.exports = {POManager};