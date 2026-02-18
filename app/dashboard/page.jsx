"use client";

import 'animate.css';
import React, {useState} from 'react';
import {Button, Divider, Form, Input, Modal } from "antd";

import { nanoid } from 'nanoid';
import "antd/dist/reset.css";

import Header from "../components/Header";
import { useBookmark } from './components/zustand/useBookmark';
import moment from 'moment/moment';



export default function Page(){
    const [open, setOpen]= useState(false);
    const [form] = Form.useForm();
    const {bookmarks, setBookmark} = useBookmark()

    const createBookmark = (value)=>{
        value.date = new Date()
        value.id = nanoid();
       setBookmark(value)
       handleModalClose()
    }
    const handleModalClose = ()=>{
        setOpen(false)
        form.resetFields();
    }

    return <main>
        <Header title={"Dashboard"}/>
        <div className=" animate__animated animate__fadeIn min-h-screen bg-gray-200 py-12 ">
            <div className="w-10/12 mx-auto grid grid-cols-4 gap-8">
            <div onClick={()=>setOpen(true)} className="bg-white hover:cursor-pointer flex flex-col items-center justify-center rounded-xl py-14 shadow-lg hover:scale-75 duration-300 ">
                <div className=" text-5xl flex  justify-center items-center bg-gradient-to-r from-rose-600 via-orange-400 to-rose-500 rounded-full text-white w-12 h-12 mb-4">
                    <button className="">+</button>
                
                </div>
                <h1 className="text-2xl font-medium">Add Bookmark</h1>
                
            </div>
            {
            bookmarks.map((item, index)=>(
                 <div key={index} className="bg-white flex flex-col items-center justify-center rounded-xl py-14 shadow-lg ">
               
                <h1 className="text-2xl font-medium">{item.bookmarkName}</h1>
                <label className="text-xs text-gray-500" htmlFor="">{moment(item.date).format("DD MMM, YYYY hh:mm A")}</label>
                <a target="_blank" className="flex items-center gap-2 mt-4 text-green-400 font-medium hover:underline" href={item.link}>
                    
                    Browse Link
                </a>
                
            </div>
            ))
        }

            </div>
            <Modal open={open} footer={null} title="Create a new bookmark" onCancel={handleModalClose}>
                <Divider />
                <Form layout='vertical' onFinish={createBookmark} form={form}>
                   <Form.Item label="Bookmark name" name="bookmarkName" rules={[{required: true}]}>
                    <Input 
                    size='large'
                    placeholder="Bookmark name" />
                   </Form.Item>

                   <Form.Item label="Link" name="link" rules={[{required: true, type: "url"}]}>
                    <Input 
                    size='large'
                    placeholder="Link" />
                   </Form.Item>

                   <Form.Item>
                    <Button htmlType='submit' type='primary' size='large'>
                        Create
                    </Button>
                   </Form.Item>
                </Form>
            </Modal>
        </div>

       
        
    </main>
}
