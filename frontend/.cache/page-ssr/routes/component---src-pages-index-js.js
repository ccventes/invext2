exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 9712:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
__webpack_unused_export__=Component=>Component;

/***/ }),

/***/ 7601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "C:\\Users\\fract\\OneDrive\\Documentos\\unal\\investigacion\\invext\\frontend\\node_modules\\react\\index.js"
var external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_ = __webpack_require__(2247);
var external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/images/colombia2.png
/* harmony default export */ const colombia2 = ("/static/colombia2-d5a50f8d7aac55e23027e97ee1e694ca.png");
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(982);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(9417);
// EXTERNAL MODULE: ./node_modules/graphql-tag/lib/index.js + 12 modules
var lib = __webpack_require__(4311);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/hooks/useQuery.js + 4 modules
var useQuery = __webpack_require__(3199);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Nav.js + 2 modules
var Nav = __webpack_require__(2454);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Navbar.js + 23 modules
var Navbar = __webpack_require__(5804);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/NavDropdown.js + 11 modules
var NavDropdown = __webpack_require__(7692);
;// CONCATENATED MODULE: ./src/components/Navigation.js
const MENUITEMS=(0,lib/* gql */.Ps)`
query GetMenunav {
  menunav {
    data {
      attributes {
        nav {
          __typename
          ... on ComponentMenuDropdown {
            id
            titulo
            otrocampo
            # Aquí puedes incluir más campos específicos de ComponentMenuDropdown
          }
          ... on ComponentMenuSingle {
            id
            titulo
            # Aquí puedes incluir más campos específicos de ComponentMenuSingle
          }
        }
      }
    }
  }
}
`;function Navigation(){const{loading,error,data}=(0,useQuery/* useQuery */.a)(MENUITEMS);if(loading)return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("p",null,"Loading...");if(error)return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("p",null,"Error :");console.log("los datos son "+JSON.stringify(data,null,2));return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",null,/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(Navbar/* default */.Z,{className:"custom-navbar","data-bs-theme":"dark"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(Nav/* default */.Z,{className:"me-auto "},data.menunav.data.attributes.nav.map(item=>{if(item.__typename==='ComponentMenuSingle'){return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",{key:item.id},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(Nav/* default */.Z.Link,null,item.titulo));}else if(item.__typename==='ComponentMenuDropdown'){return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",{key:item.id},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(NavDropdown/* default */.Z,{title:item.titulo,id:"navbarScrollingDropdown"+item.id}));}else{return null;}}))));}
;// CONCATENATED MODULE: ./src/components/Header.js
function Header(){//const {loading, error,data} = useFetch('http://localhost:1337/graphql/')
return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("section",null,/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",{className:"firstMenu"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",{className:"logo"}),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",{className:"space"}," "),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("ul",{className:"nav-superior"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("li",{className:"item-nav"}," ",/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/#"},"Aspirantes ")),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("li",{className:"item-nav"}," ",/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/#"},"Egresados ")),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("li",{className:"item-nav"}," ",/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/#"},"Estudiantes ")),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("li",{className:"item-nav"}," ",/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/#"},"Docentes ")),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("li",{className:"item-nav"}," ",/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/#"},"Administrativos "))),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("ul",{className:"socialLinks"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("li",{className:"Links"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{className:"twitter",to:"/#"})),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("li",{className:"Links"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{className:"facebook",to:"/#"})),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("li",{className:"Links"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{className:"youtube",to:"/#"})))),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",{className:"MainMenu"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",{className:"container"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("div",{className:"navigation"},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(index_es/* FontAwesomeIcon */.G,{icon:free_solid_svg_icons/* faLocationDot */.opg,style:{color:"#e2e6ee"}}),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{id:"link-site",to:"/#"}," Sitio Diepal "),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(Navigation,null))),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("img",{alt:"Escudo de la Rep\xFAblica de Colombia",src:colombia2,width:"66",height:"66",title:"Escudo de la Rep\xFAblica de Colombia"})));}
// EXTERNAL MODULE: ./node_modules/@apollo/client/core/ApolloClient.js + 32 modules
var ApolloClient = __webpack_require__(1717);
// EXTERNAL MODULE: ./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js + 9 modules
var inMemoryCache = __webpack_require__(5185);
// EXTERNAL MODULE: ./node_modules/@apollo/client/react/context/ApolloProvider.js
var ApolloProvider = __webpack_require__(3768);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Carousel.js + 8 modules
var Carousel = __webpack_require__(7520);
;// CONCATENATED MODULE: ./src/config.js
// src/config.js
const config={apiUrl:"http://127.0.0.1:1337",otherVariable:({}).REACT_APP_OTHER_VARIABLE};/* harmony default export */ const src_config = (config);
;// CONCATENATED MODULE: ./src/components/Banner.js
const BANNER=(0,lib/* gql */.Ps)`
query GetBanner{
  bannerMain{
     data{
       id
       attributes{
         ImageRoute{
           data{
             attributes{
               name
               url
             }
           }
         }
       }
       
     }
 
}
 
}
`;//const { protocol, hostname } = window.location;
//const baseUrl = `${protocol}//${hostname}`;
function Banner(){const{loading,error,data}=(0,useQuery/* useQuery */.a)(BANNER);if(loading)return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("p",null,"Loading...");if(error)return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("p",null,"Error :");console.log("EL dato de banner es: "+JSON.stringify(data,null,2));console.log('la enviroment vairable API URL:',src_config.apiUrl);const RutaImagen=data.bannerMain.data.attributes.ImageRoute.data.attributes.url;return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(Carousel/* default */.Z,null,/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(Carousel/* default */.Z.Item,null,/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("img",{src:src_config.apiUrl+RutaImagen,className:"d-block w-100 h-100",alt:"..."}),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement(Carousel/* default */.Z.Caption,null,/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("h3",null),/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_default().createElement("p",null))));}
;// CONCATENATED MODULE: ./src/components/Layout.js
//src/components/layout.js
//src/components/layout.js
//import { Link, graphql, useStaticQuery } from 'gatsby'
const cliente=new ApolloClient/* ApolloClient */.f({uri:src_config.apiUrl+'/graphql',cache:new inMemoryCache/* InMemoryCache */.h()});const Layout=({showBanner=false})=>{return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_.createElement(ApolloProvider/* ApolloProvider */.e,{client:cliente},/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_.createElement(Header,null),showBanner&&/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_.createElement(Banner,null)," ");};/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./src/pages/index.js
// src/pages/index.js
//import { Link, graphql } from 'gatsby'
//import axios from 'axios';
//import { useEffect, useState } from 'react'
const IndexPage=()=>{//const [menuppals, setMenuppals] = useState([]);
return/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_.createElement(components_Layout,{showBanner:true});};const Head=()=>/*#__PURE__*/external_C_Users_fract_OneDrive_Documentos_unal_investigacion_invext_frontend_node_modules_react_index_js_.createElement("title",null,"Sitio Diepal");/* harmony default export */ const pages = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map