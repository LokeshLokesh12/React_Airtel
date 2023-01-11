import React from "react";
import './xstream.css'
  
function city() {
  return (
    <div>
      <select id="region" name="city" >
        {" "}
        <optgroup>
          <option value="">Select City</option>
          <option value="Delhi">
            Delhi
          </option>
          <option value="Gurgaon ">
            Gurgaon
          </option>
          <option value="Noida">
            Noida
          </option>
          <option value="Ghaziabad">
            Ghaziabad
          </option>
          <option value="Faridabad">
            Faridabad
          </option>
          <option value="Bangalore">
            Bangalore
          </option>
          <option value=" Hyderabad">
            Hyderabad
          </option>
          <option value="Chennai">
            Chennai
          </option>
          <option value="Mumbai">
            Mumbai
          </option>
          <option value="Pune">
            Pune
          </option>
          <option value="Calicut">
            Calicut
          </option>
          <option value="Kolkata">
            Kolkata
          </option>
          <option value="Meerut">
            Meerut
          </option>{" "}
        </optgroup>{" "}
        <optgroup label="-------------------------">
          <option value="Ahmedabad">
            Ahmedabad
          </option>
          <option value="Alappuzha">
            Alappuzha
          </option>
          <option value="Allahabad">
            Allahabad
          </option>
          <option value="Alwar">
            Alwar
          </option>
          <option value="Ambala">
            Ambala
          </option>
          <option value="Amritsar">
            Amritsar
          </option>
          <option value="Baba Bakala">
            Baba Bakala
          </option>
          <option value="Banda">
            Banda
          </option>
          <option value="Bangalore">
            Bangalore
          </option>
          <option value="Barabanki">
            Barabanki
          </option>
          <option value="Beas">
            Beas
          </option>
          <option value="Bharatpur">
            Bharatpur
          </option>
          <option value="Bhikhiwind">
            Bhikhiwind
          </option>
          <option value="Bhopal">
            Bhopal
          </option>
          <option value="Bhubaneswar">
            Bhubaneswar
          </option>
          <option value="Bikaner">
            Bikaner
          </option>
          <option value="Budhe Theh">
            Budhe Theh
          </option>
          <option value="Bundala Amritsar">
            Bundala Amritsar
          </option>
          <option value="Bundi">
            Bundi
          </option>
          <option value="Calicut">
            Calicut
          </option>
          <option value="Chabhal">
            Chabhal
          </option>
          <option value="Chandigarh">
            Chandigarh
          </option>
          <option value="Chennai">
            Chennai
          </option>
          <option value="Chittorgarh">
            Chittorgarh
          </option>
          <option value="Chohla Sahib">
            Chohla Sahib
          </option>
          <option value=" Churu">
            Churu
          </option>
          <option value="Cochin">
            Cochin
          </option>
          <option value="Coimbatore">
            Coimbatore
          </option>
          <option value="Cuttack">
            Cuttack
          </option>
          <option value="Darjeeling">
            Darjeeling
          </option>
          <option value="Dausa">
            Dausa
          </option>
          <option value="Delhi">
            Delhi
          </option>
          <option value="Dera Baba Jaimal Singh">
            Dera Baba Jaimal Singh
          </option>
          <option value="Derra bassi">
            Derra bassi
          </option>
          <option value="Dholpur">
            Dholpur
          </option>
          <option value="Hyderabad">
            Hyderabad
          </option>
          
          <option value="Indore">
            Indore
          </option>
          <option value="Jaipur">
            Jaipur
          </option>
          <option value="Jalandhar">
            Jalandhar
          </option>
          <option value=" Jalaun">
            Jalaun
          </option>
          <option value="Jandiala Guru">
            Jandiala Guru
          </option>
          <option value="Jaunpur">
            Jaunpur
          </option>
          <option value="Jhalawar">
            Jhalawar
          </option>
          <option value="Jhansi">
            Jhansi
          </option>
          <option value="Jharsuguda">
            Jharsuguda
          </option>
         
          <option value="Kanchipuram">
            Kanchipuram
          </option>
          <option value=" Kannur">
            Kannur
          </option>
          <option value="Kanpur">
            Kanpur
          </option>
          <option value="Karaikudi">
            Karaikudi
          </option>
          
          <option value=" Kolkata">
            Kolkata
          </option>
          <option value="Kollam">
            Kollam
          </option>
          <option value="Kota">
            Kota
          </option>
          <option value="Kottayam">
            Kottayam
          </option>
          <option value="Kozhikode">
            Kozhikode
          </option>
          <option value="Krishna">
            Krishna
          </option>
         
          <option value="Lucknow">
            Lucknow
          </option>
          <option value="">
            Ludhiana
          </option>
          <option value="Madurai">
            Madurai
          </option>
          <option value="Malappuram">
            Malappuram
          </option>
         
          <option value=" Mumbai">
            Mumbai
          </option>
          <option value="Nagercoil">
            Nagercoil
          </option>
          <option value="Nagpur">
            Nagpur
          </option>
          <option value="Namakkal">
            Namakkal
          </option>
          
          <option value="Noida">
            Noida
          </option>
         
          <option value="Pondicherry">
            Pondicherry
          </option>
          
          <option value="Pune">
            Pune
          </option>
          
          <option value="Ranchi">
            Ranchi
          </option>
          
          <option value=" Salem">
            Salem
          </option>
         
          <option value=" Thane">
            Thane
          </option>
          <option value="Thiruvananthapuram">
            Thiruvananthapuram
          </option>
          <option value="Thrissur">
            Thrissur
          </option>
          <option value="Tiruchirappalli">
            Tiruchirappalli
          </option>
          <option value=" Tirunelveli">
            Tirunelveli
          </option>
          <option value="Tiruppur">
            Tiruppur
          </option>
          <option value="Tirupur">
            Tirupur
          </option>
         
          <option value="Vellore">
            Vellore
          </option>
         {" "}
        </optgroup>{" "}
      </select>
    </div>
  );
}

export default city;
