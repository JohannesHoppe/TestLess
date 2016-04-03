using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Hosting;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TestLess.Controllers
{
    public class HomeController : Controller
    {
        private IHostingEnvironment _env;

        public HomeController(IHostingEnvironment env) {
            _env = env;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            
            return View();
        }
    }
}
