

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;




public class Exercise1 {

   public static void main(String[] args) {
      CountryDao countryDao= InMemoryWorldDao.getInstance();
      //write your answer here  //Find the highest populated city of each country
      List<City> myCities = countryDao.findAllCountries().stream()
	  .map(country -> country.getCities().stream().max(Comparator.comparingInt(city -> city.getPopulation()) ) ) // Should return Optional instance cuz of Max terminator -- Ask Eng --
	  .filter(Optional::isPresent) // not null 
	  .map(Optional::get)
	  .peek(System.out::println)
	  .collect(Collectors.toList());
	  // How can i filter names and population only ?  
   }

}