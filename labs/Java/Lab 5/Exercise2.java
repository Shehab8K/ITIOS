

import java.util.Comparator;
import java.util.Map;
import java.util.Optional;
import java.util.function.BiConsumer;
import java.util.stream.Collector;
import java.util.stream.Collectors;



class Exercise2 {

    public static void main(String[] args) {
        CountryDao countryDao = InMemoryWorldDao.getInstance();
  //      write your answer here  // • Find the most populated city of each continent
		   Map<String, Optional<ContinentPopulatedCity>> continentsCapitals = countryDao.findAllCountries().stream()
          .filter(country -> country.getCapital() > 0)
          .map(country -> new ContinentPopulatedCity(country.getContinent(), cityDao.findCityById(country.getCapital())))
          .collect(groupingBy(ContinentPopulatedCity::getKey, maxBy(comparing(cpc -> cpc.getValue().getPopulation()))));
			BiConsumer<String, Optional<ContinentPopulatedCity>> print= (k, v) -> {
            Consumer<ContinentPopulatedCity> continentPopulatedCityConsumer = cpc -> out.println(cpc.getKey() + ": " + v.get().getValue());
            v.ifPresent(continentPopulatedCityConsumer);
        };
        continentsCapitals.forEach(print);
    }
    }

}