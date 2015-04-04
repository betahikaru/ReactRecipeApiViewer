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

var Secrets = require('./Secrets');
var SearchResults = require('./SearchResults');

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
      searchString: 'ひき肉',
      isLoading: false,
      message: '',
    };
  }

  render() {
    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <View/>);

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
          <TouchableHighlight
            style={styles.button}
            underlayColor='#99d9f4'
            onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <Image source={require('image!kyusyoku_koujou_ryouri')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }

  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });
    fetch(query)
      .then((response) => response.json())
      .then((json) => {
        this._handleResponse(json)
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
        })
      });
  }

  _handleResponse(response) {
    this.setState({ isLoading: false , message: '' });
    console.log(response);
    if (response.result !== undefined) {
      console.log('Properties found: ' + response.result.length);
      this.props.navigator.push({
        title: 'Results',
        component: SearchResults,
        passProps: {listings: response.result}
      });
    } else {
      this.setState({ message: 'Searching query is failed; please try again.'});
    }
  }

  onSearchPressed() {
    // 1.
    // Access to Rakuten API.
    var query = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20121121?format=json&applicationId="
      + Secrets.rakutenApplicationId;

    // 2.
    // If uncomment this, access to testdata, by `python -m SimpleHTTPServer`.
    // query = "http://localhost:8000/testdata/recipes.json";

    this._executeQuery(query);
  }
}

module.exports = SearchPage;
