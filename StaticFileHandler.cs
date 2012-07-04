using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace NancyTest
{
    public class HtmlHandler:IHttpHandler
    {

        public bool IsReusable
        {
            get { return true; }
        }

        public void ProcessRequest(HttpContext context)
        {
            var response = context.Response;
            var path = context.Server.MapPath(context.Request.Path);
            if (File.Exists(path))
            {
                response.ContentType = "text/html";
                context.Response.WriteFile(path);
            }
            else
            {
                response.StatusCode = 404;
                response.Write("<h1>file not found!</h1>");
            }
        }
    }
}