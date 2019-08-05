import { storiesOf } from "@storybook/react";
import React, { PureComponent } from "react";
import Accordion from "../components/accordion";
import Button from "../components/button";

const stories = storiesOf("Accordion", module);

const AccordionWrapper = () => {
  return (
    <>
      <Accordion>
        <Accordion.Header>
          Accordion 1
        </Accordion.Header>
        <Accordion.Content>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <Button>Button</Button>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header>
          Accordion 2
        </Accordion.Header>
        <Accordion.Content>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <div>Some content</div>
          <Button>Button</Button>
        </Accordion.Content>
      </Accordion>
      <h1>Text</h1>
    </>
  );
};

class ControlledAccordionWrapper extends PureComponent {
  public state = {
    expanded: true,
  };

  public render() {
    return (
      <>
        <Accordion expanded={this.state.expanded} onChange={this.handleChange}>
          <Accordion.Header>
            Accordion 1
          </Accordion.Header>
          <Accordion.Content>
            <div>Some content</div>
            <div>Some content</div>
            <div>Some content</div>
            <div>Some content</div>
            <div>Some content</div>
            <Button>Button</Button>
          </Accordion.Content>
        </Accordion>
        <Button onClick={this.handleClick}>Toggle Accordion</Button>
      </>
    );
  }

  private handleChange = (newExpanded: boolean) => {
    this.setState({expanded: newExpanded});
  }

  private handleClick = () => {
    this.setState({expanded: !this.state.expanded});
  }
}

stories.add("Accordion", () => <AccordionWrapper/>);
stories.add("Controlled Accordion", () => <ControlledAccordionWrapper/>);
