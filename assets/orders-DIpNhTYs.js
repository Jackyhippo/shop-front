import{R as y,ad as V,G as h,c as g,Y as n,$ as v,X as r,L as s,aw as d,ai as i,W as u,_ as w,O as x,am as b}from"./index-CJ02KohQ.js";import{V as p,a as A,b as m}from"./route-block-Cm0x37ow.js";import{V as D}from"./VDivider-rWzU1HUO.js";import{V as B}from"./VDataTable-C4LigiPJ.js";import{V as C}from"./VContainer-BKHYJw0a.js";import"./VPagination-DM1T6PII.js";import"./VList-B2ZwaDLV.js";import"./VMenu-B6GWz5fG.js";const L={class:"text-center"},O={__name:"orders",setup(S){const{apiAuth:_}=b(),{t:o}=y(),f=V(),l=h([]),k=g(()=>[{title:"ID",key:"_id"},{title:o("order.createdAt"),key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:o("order.cart"),key:"cart"},{title:o("order.price"),key:"price",value:t=>t.cart.reduce((a,e)=>a+e.product.price*e.quantity,0)}]);return(async()=>{var t,a;try{const{data:e}=await _.get("/order");l.value=e.result}catch(e){console.log(e),f({text:o("api."+(((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"unknownError")),snackbarProps:{color:"red"}})}})(),(t,a)=>(n(),v(C,null,{default:r(()=>[s(A,null,{default:r(()=>[s(p,{cols:"12"},{default:r(()=>[d("h1",L,i(t.$t("nav.orders")),1)]),_:1}),s(D),s(p,{cols:"12"},{default:r(()=>[s(B,{items:l.value,headers:k.value},{"item.cart":r(e=>[d("ul",null,[(n(!0),u(x,null,w(e.item.cart,c=>(n(),u("li",{key:c._id},i(c.product.name)+" x "+i(c.quantity),1))),128))])]),_:2},1032,["items","headers"])]),_:1})]),_:1})]),_:1}))}};typeof m=="function"&&m(O);export{O as default};
