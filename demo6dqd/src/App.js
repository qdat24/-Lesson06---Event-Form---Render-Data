import React, { Component } from 'react'
import DqdProductlist from './component/DqdProductlist';
import DqdProductAdd from './component/DqdProductAdd';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        { title: 'Đinh Quốc Đạt', id: 2210900139 , status:1 },
        { title: 'Cabbage', id: 1 , status:1 },
        { title: 'Garlic', id: 2 , status:0 },
        { title: 'Apple', id: 3 , status:0 },
        { title: 'Samsung', id: 4 , status:1 },
      ]
    }
  }
  DqdHanldSubmit=(param)=>{
    console.log("App:",param);
    //thêm vào bảng dữ liệu product
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container'>
          <h1>Đinh Quốc Đạt -Event Form - Render Data</h1>
          <hr/>
          {/* Corrected prop name from renderProduct to renderProducts */}
          <DqdProductlist renderProducts={this.state.products}/>
          <hr/>
          <DqdProductAdd onSubmit={'this.dqdHanldSubmit'}/>
      </div>
    );
  }
}
export default  App;
