import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESITION_API } from "../utils/constants";
import { storeSearchCache } from "../utils/searchSlice";

const Head = () => {

    const dispatch=useDispatch();

    const [showSuggestion,setShowSuggestion]=useState(false);

    const [searchResults,setSearchResults]=useState([]);

    const [searchQuery,setSearchQuery]=useState('');

    const searchCache=useSelector(store=>store.search);

    useEffect(()=>{
      const timer=  setTimeout(()=>{
        if(searchCache[searchQuery]){
            setSearchResults(searchCache[searchQuery])
        }else{
          getSearchSuggestion();
        }

      },300);
      return ()=>{
        clearTimeout(timer);
      }
    },[searchQuery]);

    const getSearchSuggestion=async()=>{
        console.log('API call')
        const searchFetch= await fetch(YOUTUBE_SUGGESITION_API+searchQuery);
        const dataJson=await searchFetch.json();
        setSearchResults(dataJson[1]);
        //
        dispatch(storeSearchCache({
          [searchQuery]:dataJson[1]
        }))
    }

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
  return (
    <header className="fixed  bg-white border-t grid grid-flow-col w-full p-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={()=>toggleMenuHandler()}
          className="h-12  mx-2 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=avif&w=512"
        />
      
        <img
          alt="youtbue"
          className="h-12 mx-2"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
       
        />
      
     
      </div>

      <div className="col-span-10 px-10">
        <input
          className="w-1/2 px-10 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full">Search</button>

      {searchResults.length>0&&showSuggestion&&<div className="fixed bg-white px-5 py-2 w-[30rem] shadow-lg border border-gray-100">
            <ul>
              {searchResults.map((res)=><li className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {res}</li>)}  
            </ul>
        </div>}
      </div>


      <div className="col-span-1">
        <img
          alt="user"
          className="h-12 mx-2"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBASERIRERUSEREREg8RDxESEREREhESGBUZGhgVGBgcIS4lHB4rHxgYJjgmLi8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJCsxNDQxNjExNjYxNDExNTQ0NDQ0NzQ0NDQ0NDE0NDQ0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMEBQYHAQj/xABEEAADAAECAwQFCAcGBQUAAAAAAQIDBBEFEiEGMUFRImFxgZETMlKSobHB0QcUFUJicuEjM1OCotIkg5OywhY0Q2Nz/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EAC8RAQACAQIFAgIKAwAAAAAAAAABAhEDEgQhMUFRE5FxgTJCUmGhscHR4fAFFSL/2gAMAwEAAhEDEQA/APZgAAAAAAAACNNLq+5ePkBIhdpJumkl1bb2S95z3E+0+ON5w7ZKXR1+6n6vM5jW8Ty5XvdOvKe6V7EZtTiaV5RzlfTh7W5zydnq+P6aN0qdv+Dqvrdxqs/am3/dxM+TpumcrWYrrMZbcVeek4aa8NSPvb7Nx/U1++5XlKlf1MO+K5335cn172+81VZius5TOtae8ro06x2bKuIZPp5Pr1+Z8/auee7LkXsyX+ZqKzlN5zn1J8p2R4dDHaTVx3Zaa8qU1963M7T9t80/3kRa853h/icVecprUFldfUjpLi2jSesPV9B2w0eTZVTw0/8AE6T9bu+Ox0EWqSaaaa3TT3TXmmeA3qDYcH7T6nSUvk75se+9YrbcV57L91+tGnT4vteFF+F+y9xBrOAcXx6zTxnhbc26qW93FLvlmzNsTExmGOYxOJAASgAAAAAAAAAAAAAAAAI1KaafVPo0SAHjufM8eoy6bI+XJiyXMt9FkjfeKT8G5cv17nysjT2fR+s336TOz7vl1uKeapSjUSlu3K+be3q7n6tvI8/0/FskJS9skL92+u3sfejx9bS2WmHq6WpurEt9WYrrMYM8T09fOnJjfnO2SPg9mT5sV/Mz4/Zk58b+1FE0sti1VtZyq84/U7fzax1/Lkj8SFcPzfRX14f4jbbwndXyhecprMWvh+byX14/MqvSWvnPHPtyQvxJilvCN1fKmsjK6pn25hd+TF7rd/8AamY95oXdTr+WXt/q2f2HcUlzNoTdEHRFXutyLonajL0P9FHFOXNl0tPpkn5XH/NOype9NP3M9UPz32W1zwa/S5O5LNjiv5LfJX+mmfoQ9LhrZpjw8/iIxfPkABoUAAAAAAAAAAAAAAAAAAA1XE8u9KPBLd+1nLcU7I6TUt1yvFb77x7Ld+uX0Zv8uTmuq899vZ4H2Dy7W33mXoVrtrEPNtb+j3Vzu8V48q8E98d/B7r7TTajsnxGO/T5K28Y5bX2M9oksg6ikSibzDwXJwbWT87T5l/y6ZX+zNV/g5v+nk/I/QksVR36UeXPqz4fnyeDayu7T5n/AMujIx9luI13abIvXUqV9rPdrZVRzNYh1Fpl41i7DcRrviIX8eSF9i3ZfqOwmqx4smXJlwyoirczz23st9uqSPWGaHthl5NBqq/+qkvfsiuZ58nTx/DXor3/AHh0QjpKXkkHQxzTlKb2afk0/gz9L6bLz44r6cTXxSZ+Yqo/S/CP/b4P/wAcP/YjXw3dm4jszAAamYAAAAAAAAAAAAAAAAIW9k35ImQtbprzTQHPJlssoTLZZ41ZeraF8ssllEssVF9bKZhcqDorVHzmLNzjCVMrpn10V0yu1ncQjTOR/SLn5dDU+OTJjhetb7v7EdZTOE7dYsuqz6fR4VzVKrPk8oT9Cap+C+f8CuOqyY5POqog6PVeE9lNLppTuVmy7eld/NT8lPkaLt9w7FOOM0RMUq5a5UkmvYTW0TOIRMTjLhoXNUyu+qmUva9j9QYMSiJhd0TMr3LY/OvYzQvUcS0mPvXy0ZL8uTH/AGlJ+p8m3vP0ebtCMRMsetPQABepAAAAAAAAAAAAAAAAAABzeqjlyXPlTa9j6r7z5NGbxrDty5F/LX4M1s0eRq12XmHp6dt9IlkqiSooVE1REWTNV/MOYp5hzHW5ztTdEXRF0QqjmbOoq+1RTSlN1suZpJvZbtLuTfvfxJVRjZLOOrvohls5Dt5k/wCF2/jn7X/Q6fJRxnbpXdabTwneTNfowu+m2pmfe6LNOObi/Rtf0M8J3vPrKXSZ+QxP1tqra+Er4nrZqezXCJ0elxaadm4lc9L97I+tV8TbHq0rtjDzb23TkAB05AAAAAAAAAAAAAAAAAABXlxqpcvqmtmcvqMVYqc14fNfhS8GdYYHEsOO42ulLXza72n+Jn4jSi9c94X6GrsnHaWhmyxUYN7w9n7n4P1olOU8zD0Ms3mHMYnyo+VAynRXVmPWUqvKMGV95DFyZCLtvuLcWBvvOsRCOqOHG29yfZngfymtycRyr0ce+DRS/Kd5vL726Sfl18TecN4bvtVLZd6Xn/Q3UykkkkklskuiS8jZw2lOd9vkya+rGNlfmmADayAAAAAAAAAAAAAAAAAAAHw+lWRgV58+3RGqzp3un3M2FY9yPyQHP2nL5Mi33+ZXhXsfg/UUXpa74fMvJ9H/AFOjy6WLlzaVS/B/ea3Lw3NHXG1kj6FPlyL2V3P37GTU4bPOrTp6/azTVzrvTXtG9GyrOl0yTcPyuHt8Vuj48un+nj+sjLbTvHZpi9Z7tcoplkadvvMl6nCu5p/y719x8V5L+Zjt/wAVJY5+L6/YRGnqT0iUzqUjrME4pnvKNTrEvRnvfcl1pmR+z8ldclpL6GPf7afX7CS0sQtpSXn5v2svpwkzzvKm/FR9V84XxLND9Om58Ib5tvedNpddFro9n5fkcpkxkMeSoe6N1axWMQxzMzOZdyDTcN4qq2m/c/L2m4JQ+gAAAAAAAAAAAAAAAAAARckgBW4PnIWgCrkHIWNlfOn0TTa70mugBpFNYcf0I+rJZTINgU1EruSXsSRVaL6ZVSAxqRRcmVSK6kDBuDHvGbGoKqgDXynL3RveF8Q7orufRPyf5GtrERiXLA64GFw3Uc8bP507J+teDM0AAAAAAAAAAAAAAAAAAAB8bDZW2B9bPLcuq/Ue0Oerqlhz6e8+zp8i5YVPZeyLfvPTmzyn9Mmk9PR5Ze12suB7dG09u/1bU17wLewOvnHj1PE9dmeONRlrkWTJTmU6b5In2trp4SjuuFce0mrir0+WMij5+z6x7V4Hm/azh8Y8nBtFsnj5lzS+s1vUy217mR4TMYeKcV+SmcePFp7SiFywvRl9y/zfFgekxxvSVjeac+N4lXI751yc3lv5mXORUk0001umu5o8NqFPZ/DP+NrlG3nssn+xHsvC1tgxryifuAy2yFMNkGwPlMhQbItgfGQYbINgZGhz8mSX4P0a9j/rsdEcjVHT6TLz45rzS39viBeAAAAAAAAAAAAAAAARbDZBsA2RbPjZjazVTji8lfNiXT836gmImZxC5s8+/SVwzU6jNoVix3kxxk5slSk1G9T1fuRLUdptTdOoaifCZlfa2upUu0uq+mn7ZX5FPr1ej/qtfHWPef2Udv8ASZ8ep4frYxZM+LTLlyRjl3afNzJ7Lw9fqNZwXQ6rLj4vrHhyY61WDKtPjuWslPkvZbPr13le43i7T6n+B+2f6kl2pz+WP6r/ADHr1RP+L4j7vf8Ah5/V570eh0v6vmiMer57yVFJVTbWyW26SVvds9r062iF5SvuOcx9ostd6x/B/mZul41vSWSUk2kqlvZN9yaJjWpKm/A61IzMe0tw2QbDZBstZCmQbPjZBsA2QqhVFTYBs33Acm+Nz9GvsfX79zn2za9ncnp3PnKr4Pb/AMgOgAAAAAAAAAAAAACLZ9ZU2AbIthsrpgfWzR9rsnLo8nrcT9q/I3FM5rt1k20m30skfczm/wBGV/CxnXp8Y/NhdhuJ56yrT82+KMeW1Gy6PmXj399Gr12v1Wtm8lJVGmTq3O0cs0/Jvr3eBb2AvbNqMnhj0+Rv4y//ABKOD9OG8Qvz+Qj/AFz/ALjNzmsRnz+D2ZrWmve8VjP/ABEcu9p5++WE9FllYslzyxlrbHW8vn2a36J7rv8AE3fafhWZ5slYcNfJY8WLnqZUymp67fS9e25XxOm8XCca73M1t7blfgbbBqn+0uINt8saXKtm3t0cbdPe/iTFY6fD8kX175jUjHKLe26I8uS4dps+ZtYYvJy7OuVbqd+7d9yL6u53i5qaT2qaTmk914M3Ggxv9l4eTNGlrJqburrJUcylUuVNePoz0/hNf2l1cZddHydTklxp5q5aqapd73+HwONnKJ78vxW+vN9W1cco3efq469uf6Ouh+ivYvuPjZ836L2IjVG181HQpldUKorphI2QbFMg2AbNhwC9s6X0opfj+Bq2zN4JX/EY/wDOv9LA7AAAAAAAAAAAAABDI+hS2W5V0MemAbK2xTItgGzk/wBISr9VlpejOSed+W6e32nUblGpwxkioySqi01Uvqmjm0ZjC3R1PT1K38S807N8aw6bFq5yc7rPhrHjcymlTlreuvRbteZfwXjGknRZ9NqXlTyZIufk5lulPLst30XWfHzNzn7C6VtubyyvCfQrb3sx77B4fDNk96ko9O8PVni+FtMzM2jMxPzjphj63jujvU8PuHU4dPOOcvNNPk2rd+G9e5GZqOM6CXr9RGZ1k1MXix4vkqlrfpzKn0afR9dmtjErsIvDM/fKKK7CV4Zl74J238f3GEerwkxEb5jljpPTO77Pn4MnhmXSanRafDkzxp60uaryTkXTJL3fo9evR/f07jW5s+DLxFfq0qcPPChStk0u+tvW+pY+xGZd2XG/8lI2/Auzc6aue2rvw2WyXsQilpxmDU4nQrW00tMzOcRicRNuvaO/T2dDTKqoVRXTNDxhsi2fGyDYBsg2GyAH1mXwl7Z8f86RhmdwnBVZsdTLam06fgku9gdkAAAAAAAAAAAAAwuIW1PQ5bUdor09elKyR4y3tS/lo7DUYedbHI8a4NVb9ANnwrjOm1a/sbSyfvYr2i17vH2ozLlrvWx5frOCXFc07zSe6pbpp+pmx4d2p12n2jKlqsa6bX0yJeq/zTA7umQbNdoO0Wiz7JW8Fv8A+PJ6PX1PufxNjeN962afc099wK2yLYplbYBsg2fKZGqAVRVVCqINgGyDYbK2wPrZBsNiYbAgSiG+iW5h6/imm06/tL5q8McelT9XqOa1nabPlfJE/I4/Ket0v4q/BAd3osON2ldJ+aXgdbpphSlCSR5hwHJfTvPQ+F09kBswAAAAAAAAAAAAAhUJ963JgDW6nhWO/A0us7OJ9yOsAHnGq7Neox8Ol1WD+6vJC+jvzT9V7o9MqJfekUXoofgBxWLjmonplxzfnUby/g919xlRxjBXerh/xS/vXQ6PJwjG/AxcnAYfggNZOox1825fvQr2pmTfZyfJFNdnPLf7QMekRaL3wC/OviyFdnqf0viwMa6S72l7XsY2XW4Z77T9S6/cbD/0z6icdmV5Ac/m41K/u8dW/B16K/M1ep1Wsy9HXycv93GuX4vv+07uOzS8jKx9n4XggPMcPA6b3abfibXSdnX06HouLg+NeCMzHpInuQHK8L4E526HVabTqFsXKUu4kAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAEfQAAAAAAAAAAAAAAAAAP//Z"
        />
      </div>
    </header>
  );
};

export default Head;
