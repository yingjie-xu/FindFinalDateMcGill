import React, {Component} from 'react';
import Cards from './Cards';
import { Form, Input, Icon, Button, Row, Col } from 'antd';
import data from "../Assets/washed.json";

let id = 0;
let arr = [];

class DynamicFieldSet extends Component {
  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one course
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  handleSubmit = e => {
    arr = [];
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        // console.log('Received values of form: ', values);
        // console.log('Merged values:', keys.map(key => names[key]));
        let list = keys.map(key => names[key]);
        
        list.forEach(entry => {
          // if entry exists
          arr.push(entry.replace(/  +/g, ' ') //handle input with multiple space
            .replace(/([A-z]{4})(\d)/, '$1 $2') //handle input without space
            .toUpperCase()); 
        });
        //console.log(arr)
        let courses = data.map(e => e['COURSE NUMBER']);
        arr = arr.filter(e => {
          return courses.includes(e);
        })
        // console.log(arr);
      }
    });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === "ArrowDown") {
      this.add();
    }
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 0 },
      },
    };
    getFieldDecorator('keys', { initialValue: [-1] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input course's name or delete this field.",
            },
          ],
        })(<Input placeholder="course name" style={{ width: '80%'}} />)}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <Row>
        <Col md={8} xs={24}>
          <Form onSubmit={this.handleSubmit}>
            {formItems}
            <Form.Item {...formItemLayoutWithOutLabel}>
              <Button 
                type="dashed" 
                onClick={this.add}
                onKeyDown={this.handleKeyPress} 
                style={{ width: '80%' }}
              >
                <Icon type="plus" /> Add Course
              </Button>
            </Form.Item>
            <Form.Item {...formItemLayoutWithOutLabel}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col md={16} xs={24}>
          <Cards courses = {arr} />
        </Col>
      </Row>
    );
  }
}

const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);

export default WrappedDynamicFieldSet;