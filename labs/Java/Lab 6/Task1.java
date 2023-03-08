import java.util.*;

class Dictionary{
	public static Map<String, List<String>> arrayToList(List<String> words) {
		    Map<String, List<String>> map = new HashMap();

           for(String word: words){    // forEach words as word
            String firstChar = String.valueOf(word.charAt(0));
                if (map.get(firstChar) == null)
				{
                    map.put(firstChar, new ArrayList(Arrays.asList(word)));
                }
                else{
                    map.get(firstChar).add(word);
                }
       
		    }
          
		   return map;
	}
	public static void printWords(String key,Map<String, List<String>> map) {

			
				if(map.get(key)==null)
				{
				 System.out.println("No words for Character: "+key);
				}
				else
				{
				 System.out.println(key+" "+map.get(key));
				}
			
	}
	
	public static void printAll(Map<String, List<String>> map) {
        
			for (Map.Entry<String,List<String>> word : map.entrySet()) 
            System.out.println("Key = " + word.getKey() +
                             ", Value = " + word.getValue());			
		
	}
	
		
}
class Main{
	
	public static void main(String args[]){
	Dictionary myDictionary= new Dictionary();
	List<String> words = 
        new ArrayList(Arrays.asList("ads","bell", "ball", "shehab", "ahmed","zein","omar", "ola", "ant","dad","does","sara"));
		Collections.sort(words);
		if(args.length !=0)
		{
		myDictionary.printWords(args[0],myDictionary.arrayToList(words));
		}
		else
		{
		myDictionary.printAll(myDictionary.arrayToList(words));
		}
	}
	
}