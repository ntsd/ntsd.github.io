---
layout: post
title:  "Python Data Structures สำหรับผู้เริ่มต้น"
date:   2020-04-6 12:30:54
subtitle: "เรียนรู้ Data Structure ที่จำเป็นสำหรับภาษา Python สำหรับผู้เริ่มต้น"
author: "ntsd"
catalog: true
categories:
    - Programming
header-img: "../img/in-post/2019-9-19-data-structures/post-bg-data-structure.jpg"
tags:
    - Programming
    - Data Structure
    - Algorithm
published: false
---

## Data Structure คืออะไร"?"

Data Structure โครงสร้างข้อมูล เป็นรุปแบบในการการจัดเก็บข้อมูลในระบบคอมพิวเตอร์ เพื่อใช้ในการเขียน อ่าน หรือ แก้ไข
การจัดเก็บข้อมูลโดยใช้ Data Structure ที่ถูกต้องต่อการใช้งาน เพื่อเพิ่มความเร็วในการทำงาน หรือ เพื่อประหยัดการใช้งานทรัพยากรณ์ของระบบคอมพิวเตอร์ เช่น หน่วยความจำ เป็นต้น

## Python Built-in Types

### Type `str`

`str` คือ string type ในภาษา python ใช้สำหรับเป็บ Array ของ Bytes

โดยมี Default encoding เป็น utf-8

ซึ่งใช้ห่วยความจำ 1 byte ต่อ 1 ตัวอักสร ถ้าตัวอักสรทั้งหมดเป็น unicode id ที่ตํ่ากว่า 128 (8 bits) หรือ ascii code

``` Python
sys.getsizeof('a') # 50
sys.getsizeof('ab') # 51
```

แต่จะใช้ห่วยความจำ 2 bytes ต่อ 1 ตัวอักสร ถ้ามีตัวอักสรบางตัวเป็น utf-8

``` Python
sys.getsizeof('ก') # 76
sys.getsizeof('กb') # 78
sys.getsizeof('กbข') # 80
```

และถ้าเป็น Unicode ก็จะใช้ Memory ถึง 4 bytes ต่อ 1 char

``` Python
sys.getsizeof('🐍') # 80
sys.getsizeof('a🐍') # 84
sys.getsizeof('ab🐍') # 88
```

จะเห็นได้ว่าการใช้ utf-8 ใน string จะทำให้เปลืองหน่วยความจำในการจัดเก็บเป็นสองเท่า


