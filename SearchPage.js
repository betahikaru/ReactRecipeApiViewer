/**
 * Search Page Component
 * http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    fontFamily: 'Hiragino Kaku Gothic ProN',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 200,
    height: 197
  },
});

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'ひき肉'
    };
  }

  render() {
    /*
      Tips:
        styles.flowRightとstyles.buttonは、
        flex:4とflex:1なので、幅が4:1の比率になる。
    */
    console.log('SearchPage.render');
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for recipes to cook!
        </Text>
        <Text style={styles.description}>
          Search by food-name, material-name.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via food-name'/>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <Image source={require('image!kyusyoku_koujou_ryouri')} style={styles.image}/>
      </View>
    );
  }

  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }
}

module.exports = SearchPage;
