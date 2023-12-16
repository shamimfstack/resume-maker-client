import { useForm } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";
import { useState } from "react";

const ResumeForm = () => {
  const [ tabIndex, setTabIndex ] = useState(0);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="py-12">
      <h2>Resume Form</h2>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Name & Contact</Tab>
          <Tab>Summary & Objectives</Tab>
          <Tab>Skills</Tab>
          <Tab>Projects</Tab>
          <Tab>Education</Tab>
          <Tab>Language</Tab>
        </TabList>
        {/* <div className="card shrink-0 w-full shadow-2xl bg-base-100 p-5"> */}
        <TabPanel>
          <form>
            
          </form>
        </TabPanel>
        <TabPanel>
          <h1>Hello2</h1>
        </TabPanel>
        <TabPanel>
          <h1>Hello3</h1>
        </TabPanel>
        <TabPanel>
          <h1>Hello4</h1>
        </TabPanel>
        <TabPanel>
          <h1>Hello5</h1>
        </TabPanel>
        <TabPanel>
          <h1>Hello6</h1>
        </TabPanel>
      {/* </div> */}
      </Tabs>
      
    </div>
  );
};

export default ResumeForm;
