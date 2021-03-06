import React, { Component } from 'react';
import { Card, Text } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PARTNERS } from '../shared/partners';
import { ListItems } from 'react-native-elements';



function Mission() {
  return (
    <Card title="Our Mission">
      <Text>
      We present a curated database of the best campsites in the vast woods and back country of the World Wide Web Wilderness.
      We increase access to adventure for the public while promoting safe and respectful use of resources.
      The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. 
      We also present a platform for campers to share reviews on campsites they have visited with each other.
      </Text>
    </Card>  
    
  )
}
class About extends Component {
  constructor(props) {
    super(props);
    this.state= {
      partners: PARTNERS
    }
  }
  static navigationOptions = {
    title: 'About Us'
}
  render() {
     const renderPartner=
     ({item}) =>{
       return(
         <ListItems title={item.name}
         subtitle={item.description}
         leftAvatar={{
           source:
           require('./images/bootstrap-logo.png')}} 

           />
       );
     }
  return(
   <ScrollView>
    <Mission/>
    <Card title='Community Partners'>
    <FlatList data={this.state.partners}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderPartner} />

    </Card>
   </ScrollView>
  )
  }
}
export default About;