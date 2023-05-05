import {Text,View,TextInput,TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Details,Country} from '../Actions/actions';
import MainUrl from '../Config/MainUrl'
export default function CovidApp(){
  const country1=useSelector(state => state.country5);
  const web=useSelector(state => state.webData.country);
  const web2=useSelector(state => state);
  console.log('DATA', country1);
  console.log('DATA2', web);
  console.log('DATA3', web2);
  const dispatch=useDispatch();
  return(
    <View>

    <TextInput placeholder='Enter the Country Name' style={{borderWidth:2, marginTop:30, color:'black', paddingLeft:70, margin:20, height:40}} onChangeText={(text)=>{dispatch(Country(text))}}/>
<TouchableOpacity onPress={()=>{dispatch(Details(MainUrl(country1)))}}>
    <Text>Search</Text>
    </TouchableOpacity>

<Text>I AM {country1} </Text>
{web2.webData.updated!==''?<Text>{web2.webData.updated}</Text>:<></>}
    </View>
  )
}