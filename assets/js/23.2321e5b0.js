(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{203:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch","aria-hidden":"true"}},[t._v("#")]),t._v(" Fetch")]),t._v(" "),a("p",[t._v("Data request and binding functions")]),t._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request","aria-hidden":"true"}},[t._v("#")]),t._v(" Request")]),t._v(" "),a("p",[t._v("Make Ajax request based on specified options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Request options below")]),t._v(" "),a("td",[t._v("✔")])])])]),t._v(" "),a("h3",{attrs:{id:"options-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Options Object")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Required")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("args")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Callback arguments appended after default parameters")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("cache")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Disable automatic cache-busting query string")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("complete")]),t._v(" "),a("td",[a("a",{attrs:{href:"/script#functions"}},[t._v("function")])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Complete callback")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Object to serialize and pass along with request")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("error")]),t._v(" "),a("td",[a("a",{attrs:{href:"/script#functions"}},[t._v("function")])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Failure callback")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("headers")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("{key: val} object of request headers")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("json")]),t._v(" "),a("td",[t._v("boolean false")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Evaluate the response as JSON and return object")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("jsonp")]),t._v(" "),a("td",[t._v("boolean, string")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("Boolean or override name for callback query string parameter")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("jsonpCallback")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Override the name of the JSONP callback function")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("method")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("get")]),t._v(" "),a("td",[t._v("Request verb (get, post, put, etc) in lowercase")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("processData")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Post data in the body if applicable")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("root")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Prepended request path")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("scope")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Callback scope")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("send")]),t._v(" "),a("td",[a("a",{attrs:{href:"/script#functions"}},[t._v("function")])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Send callback")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[a("a",{attrs:{href:"/script#functions"}},[t._v("function")])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Success callback")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Form, html, json, or xml to toggle content type header")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("URL endpoint to request")]),t._v(" "),a("td",[t._v("✔")])])])]),t._v(" "),a("h3",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get","aria-hidden":"true"}},[t._v("#")]),t._v(" Get")]),t._v(" "),a("p",[t._v("The callback receives the response as the first parameter followed by the XHR object. Any custom arguments provided are injected afterwards.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Wee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/samples/test.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xhr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("By default the X-Requested-With header is set to XMLHttpRequest. Also, when "),a("code",[t._v("js json")]),t._v(" is set to true the Content-Type header is set to 'application/json’. Either can be overridden or removed if set to false.")]),t._v(" "),a("h3",{attrs:{id:"post-w-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-w-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Post w/Data")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Wee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/samples/login.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user@weepower.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pass123'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login succeeded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login failed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp","aria-hidden":"true"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),a("p",[t._v("JSONP is a technique for cross-domain requests that would otherwise be blocked because of the same-origin policy. Unless overridden Wee will send "),a("code",[t._v("js callback")]),t._v(" as the query string parameter to communicate to the server how to format the response.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Wee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com/entry/465'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    jsonp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Login succeeded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The request above will create a script reference in the head with the source set to "),a("code",[t._v("js https://example.com/entry/465?callback=callback1")]),t._v(". If configured correctly the server will return a JSON object executed like the following.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("465")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lorem Ipsum"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    active"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("jsonpCallback")]),t._v(" parameter can be set to direct the callback to a pre-existing method instead of the generically registered success callback.")])])}],!1,null,null,null);s.default=e.exports}}]);