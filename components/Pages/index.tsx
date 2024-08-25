import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  


  return (
    <div style={{ direction: "rtl", minHeight: "11vh"}}>
      <br-x />
      <Window title={"سرویس هواشناسی"} style={{ fontSize:20, backgroundImage: "url('https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2013%2F04%2FCloud.jpg&signature=7c98019c0fca7ff0c5d27c9a4c9a70ae')",
      backgroundSize:"cover"}}>
        

        
           <div style={{width:"200px", height:"min-content", textAlign:'center',  fontSize:14, backgroundColor:"#30A6D8A1",
            borderRadius:10, marginRight:50, marginTop:30, padding:"10px", display:"inline-block", marginBottom:20,
            marginLeft:50, fontFamily:"cursive"}}>
              <div style={{fontSize:18, fontFamily:"cursive", color:"white" }}>

              Area &#127759;
              </div>
              <br-x/>
              <br-x/>
                 Country: {(props.k).toLocaleString("fa-IR")}
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 Region: {(props.o).toLocaleString("fa-IR")} 
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 City: {(props.sh).toLocaleString("fa-IR")} 
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 <br-x/>
                 Population: {(props.p).toLocaleString("fa-IR")} 
           </div>
            <div style={{width:"200px", height:"min-content", textAlign:'center',  fontSize:14, backgroundColor:"#30A6D8A1",
              borderRadius:10, marginRight:50, marginTop:30, display:"inline-block", padding:"10px", marginBottom:20,
              marginLeft:50, fontFamily:"cursive"}}>

              <div style={{fontSize:18, fontFamily:"cursive", color:"white" }}>
                Weather &#9925;
              </div>
              <br-x/>
              <br-x/>               
               Weather Desc: {(props.a).toLocaleString("fa-IR")} 
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               Temperature: {(props.d)+"(c)"} 
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               Humidity: {(props.r).toLocaleString("fa-IR")}  
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               Wind Speed: {(props.w)+"(km)"}   
            </div>
            

            <div style={{width:"200px", height:"min-content", textAlign:'center',  fontSize:14, backgroundColor:"#30A6D8A1",
              borderRadius:10, marginRight:50, marginTop:30, display:"inline-block", padding:"10px", marginBottom:20,
              marginLeft:50, fontFamily:"cursive"}}> 

              <div style={{fontSize:18, fontFamily:"cursive", color:"white" }}>
                Astronomy &#128301;
              </div>
              <br-x/>
              <br-x/>
              Sunrise: {(props.t).toLocaleString("fa-IR")} 
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               Sunset: {(props.gh).toLocaleString("fa-IR")} 
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               Moonrise: {(props.da).toLocaleString("fa-IR")}              
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               <br-x/>
               Moonset: {(props.m).toLocaleString("fa-IR")}
            </div>
            <br-x/>
          <br-x/>
          <br-x/>
          <br-x/>
          <br-x/>
            <div style={{textAlign:"center", fontSize:12}}>
              helia hoseini (victory)
              <br-x/>
              Turing team 
            </div>
          <br-x/>
          
              

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;
  
      let data = await fetch("https://irmapserver.ir/research/api/weather/")
      let res = await data.json();
      let sh = res.nearest_area[0].areaName[0].value;
      console.log(sh);
      let k = res.nearest_area[0].country[0].value;
      console.log(k);
      let o = res.nearest_area[0].region[0].value;
      console.log(o);
      let p = res.nearest_area[0].population;
      console.log(p);
      let a = res.current_condition[0].weatherDesc[0].value;
      console.log(a);
      let d = res.current_condition[0].temp_C;
      console.log(d);
      let r = res.current_condition[0].humidity;
      console.log(r);
      let w = res.current_condition[0].windspeedKmph;
      console.log(w);
      let da = res.weather[0].astronomy[0].moonrise
      console.log(da);
      let t = res.weather[0].astronomy[0].sunrise
      console.log(t);
      let gh = res.weather[0].astronomy[0].sunset
      console.log(gh);
      let m = res.weather[0].astronomy[0].moonset
      console.log(m);

     
      
      


  return {
    props: {
      data: global.QSON.stringify({
        session,
        sh,
        k,
        o,
        p,
        a,
        d,
        r,
        w,
        da,
        t,
        gh,
        m,
        // nlangs,
      })
    },
  }
}