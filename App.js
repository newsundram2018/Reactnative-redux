import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPageList } from './redux/actions/pageList'
const App = () => {

  const dispatch = useDispatch()
  const result = useSelector(state => state.pageList.pageList)

  useEffect(() => {
    dispatch(getPageList())
  }, [])


  // useEffect(() => {
  //   console.log(result, "---------------");

  // }, [result])

  return (
    <View style={styles.container}>
      {result.map((item, index) => (
        <Text key={index} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
          {item.employee_name}
          {item.employee_age}
        </Text>
      ))}
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container: {
    flex: 1
  }

})






















// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   Text
// } from 'react-native';
// import { connect, useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as pageActions from './redux/actions/pageList';




// class App extends Component {

//   // dispatch = useDispatch()

//   constructor(props) {
//     super(props)
//     this.state = {
//       data: []
//     }
//   }

//   incrementCount() {
//     let { actions } = this.props;
//     actions.getPageList();
//   }


//   componentDidMount() {
//     let { pageList } = this.props;
//     this.setState({ data: pageList.pageList });
//     console.log("pageList", pageList.pageList);
//   }


//   render() {
//     const { pageList } = this.props;
//     // console.log(pageList);
//     return (
//       <View styles={styles.container}>
//         <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center", marginTop: 10 }}>
//           <Button
//             title="Get Employee"
//             onPress={() => this.incrementCount()}
//           />
//           {this.state.data.map((employee, index) => (
//             <Text style={styles.textCenter} key={index}>{employee.employee_name}</Text>
//           ))}
//         </View>

//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textCenter: {
//     textAlign: 'center'
//   }
// });

// const mapStateToProps = state => ({
//   pageList: state.pageList,
// });

// const ActionCreators = Object.assign(
//   {},
//   pageActions,
// );
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App)