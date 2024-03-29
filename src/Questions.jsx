export const questions = {
    category: [ 
        {
            categoryText: "ประเภทข้อมูลส่วนบุคคล (Data Processing Context : DPC)",
            subCategory: [
                {
                    subCategoryId: 1,
                    topicText: "ข้อมูลทั่วไป (Simple Data)",
                    description: "ข้อมูลประวัติ ข้อมูลติดต่อ ชื่อจริง ข้อมูลการศึกษา ข้อมูลชีวิตครอบครัว ประสบการณ์ทำงาน เป็นต้น",
                    choices: [
                        {
                            id: 1,
                            choiceText: "1 คะแนน (พื้นฐาน): เมื่อเกิดเหตุการละเมิดที่เกี่ยวข้องกับข้อมูลทั่วไป (Simple data) และผู้ควบคุมข้อมูลส่วนบุคคลไม่ทราบถึงปัจจัยรุนแรง (Aggravating factor) อื่นๆ",
                            score: 1
                        },

                        {
                            id: 2,
                            choiceText: "2 คะแนน: เมื่อปริมาณของข้อมูลทั่วไปนั้นมาก และ/หรือ ลักษณะของผู้ควบคุมข้อมูลส่วนบุคคล อาจะทำให้สามารถประเมินบุคคลในด้านสถานะทางสังคม หรือสานะทางการเงินได้",
                            score: 2
                        },

                        {
                            id: 3,
                            choiceText: "3 คะแนน: เมื่อปริมาณของข้อมูลทั่วไปและ/หรือ ลักษณะของผู้ควบคุมข้อมูลส่วนบุคคล ทำให้ทราบถึงสถานะทางสุขภาพ ความชื่นชอบทางเพศ แนวคิดทางการเมือง ความเชื่อทางศาสนา",
                            score: 3
                        },

                        {
                            id: 4,
                            choiceText: "4 คะแนน: เมื่อคำนึงถึงลักษณะเฉพาะของบุคคล (เช่นบุคคลเปราะบาง ผู้เยาว์) ข้อมูลนั้นเป็นอันตรายต่อความปลอดภัยส่วนตัว หรือสภาพจิตใจหรือทางร่างกาย",
                            score: 4
                        }
                    ]
                },

                {
                    subCategoryId: 2,
                    topicText: "ข้อมูลพฤติกรรม (Behavioural data)",
                    description: "ตำแหน่งที่อยู่ ข้อมูล traffic ข้อมูลความชอบของบุคคล และลักษณะนิสัย เป็นต้น",
                    choices: [
                        {
                            id: 5,
                            choiceText: "2 คะแนน (พื้นฐาน): เมื่อละเมิดเกี่ยวข้องกับข้อมูลพฤติกรรม และผู้ควบคุมข้อมูลส่วนบุคคลไม่ทราบถึงปัจจัยที่ทำให้ร้ายแรงขึ้น (Aggravating factor) หรือน้อยลง (Lessening Factor)",
                            score: 2
                        },

                        {
                            id: 6,
                            choiceText: "1 คะแนน: เมื่อข้อมูลพื้นฐานไม่ได้บ่งบอกถึงพฤติกรรมของบุคคลนั้น หรือเป็นข้อมูลที่เก็บรวบรวมได้โดยง่ายจากแหล่งข้อมูลสาธารณะที่ไม่ได้มาจากเหตุการละเมิด (เช่น การรวมข้อมูลการค้นหาเว็บไซต์)",
                            score: 1
                        },

                        {
                            id: 7,
                            choiceText: "3 คะแนน: เมื่อปริมาณของข้อมูลพฤติกรรม และ/หรือ ลักษณะของผู้ควบคุมข้อมูลส่วนบุคคลสามารถสร้าง หรือเปิดเผย ข้อมูลรายละเอียดเกี่ยวกับการใช้ชีวิตประจำวัน หรือนิสัยส่วนตัวได้",
                            score: 3
                        },

                        {
                            id: 8,
                            choiceText: "4 คะแนน: ถ้าสามารถสร้างข้อมูลอ่อนไหวของบุคคลได้",
                            score: 4
                        }
                        
                    ]
                },

                {
                    subCategoryId: 3,
                    topicText: "ข้อมูลทางการเงิน (Financial data)",
                    description: "ข้อมูลทางการเงินประเภทใด ๆ ก็ตาม (เช่น รายได้ ข้อมูลธุรกรรมทางการเงิน Bank statement การลงทุน บัตรเครดิต ใบแจ้งหนี้ เป็นต้น) รวมถึง ข้อมูลสวัสดิการสังคม ที่เกี่ยวกับข้อมูลทางการเงิน",
                    choices: [
                        {
                            id: 9,
                            choiceText: "3 คะแนน (พื้นฐาน): เมื่อละเมิดเกี่ยวข้องกับข้อมูลทางการเงิน และผู้ควบคุมข้อมูลส่วนบุคคลไม่ทราบถึงปัจจัยที่ทำให้ร้ายแรงขึ้น (Aggravating factor) หรือน้อยลง (Lessening Factor)",
                            score: 3
                        },

                        {
                            id: 10,
                            choiceText: "1 คะแนน: เมื่อข้อมูลพื้นฐานไม่ได้บ่งบอกข้อมูลทางการเงินของบุคคลได้ (เช่น ข้อเท็จจริงที่บุคคลเป็นลูกค้าธนาคารแห่งหนึ่ง โดยไม่มีข้อมูลทางการเงินอื่นๆ)",
                            score: 1
                        },

                        {
                            id: 11,
                            choiceText: "2 คะแนน: เมื่อข้อมูลนั้นมีข้อมูลทางการเงิน แต่ไม่ได้บ่งบอกถึงสถานะทางการเงิน/เหตุการณ์ทางการเงินของบุคคล (เช่น ปรากฎเลขบัญชีธนาคารโดยไม่ได้มีข้อมูลทางการเงินประกอบเพิ่มเติม)",
                            score: 2
                        },

                        {
                            id: 12,
                            choiceText: "4 คะแนน: เมื่อโดยสภาพ และ/หรือ ปริมาณของข้อมูล ข้อมูลทางการเงินแบบเต็ม (เช่น ข้อมูลบัตรเครดิต เป็นต้น) ถูกเปิดเผยออกไปซึ่งสามารถทำให้เกิดการฉ้อโกง (Fraud) \
                            หรือสร้างข้อมูลโปรไฟล์ทางสถานะทางสังคมหรือทางการเงินได้",
                            score: 4
                        }
                        
                    ]
                },

                {
                    subCategoryId: 4,
                    topicText: "ข้อมูลส่วนบุคคลอ่อนไหว (Sensitive Data)",
                    description: "ข้อมูลอ่อนไหวประเภทใดๆ ก็ตาม (เช่น ข้อมูลสุขภาพ ความคิดเห็นทางการเมือง ข้อมูลความชอบทางเพศสัมพันธ์)",
                    choices: [
                        {
                            id: 13,
                            choiceText: "4 คะแนน (พื้นฐาน): เมื่อละเมิดเกี่ยวข้องกับข้อมูลส่วนบุคคลอ่อนไหว และผู้ควบคุมข้อมูลส่วนบุคคลไม่ทราบถึงปัจจัยที่ทำให้น้อยลง (Lessening Factor)",
                            score: 4
                        },

                        {
                            id: 14,
                            choiceText: "1 คะแนน: เมื่อข้อมูลพื้นฐานไม่ได้บ่งบอกถึงพฤติกรรมของบุคคลนั้น หรือเป็นข้อมูลที่เก็บรวบรวมได้โดยง่ายจากแหล่งข้อมูลสาธารณะที่ไม่ได้มาจากเหตุการละเมิด (เช่น การรวมข้อมูลการค้นหาเว็บไซต์)",
                            score: 1
                        },

                        {
                            id: 15,
                            choiceText: "2 คะแนน: เมื่อสภาพของข้อมูลสามารถนำไปสู่สมมุติฐานทั่วไป",
                            score: 2
                        },

                        {
                            id: 16,
                            choiceText: "3 คะแนน: เมื่อสภาพของข้อมูลสามารถนำไปสู่สมมุติฐานที่เกี่ยวข้องกับข้อมูลอ่อนไหวได้",
                            score: 3
                        }
                        
                    ]
                }
            ]
        },

        {
            categoryText: "ความง่ายในการระบุตัวตน (Ease of Identification : EI)",
            subCategory: [
                {
                    subCategoryId: 1,
                    topicText: "ข้อมูลชื่อ-นามสกุล",
                    description: "",
                    choices: [
                        {
                            id: 17,
                            choiceText: "0.25 คะแนน: ระดับที่ไม่สามารถระบุตัวตนได้แน่ชัด (Negligible) : จำนวนประชากรของประเทศใช้ชื่อนามสกุลเดียวกันจำนวนมาก",
                            score: 0.25
                        },

                        {
                            id: 18,
                            choiceText: "0.5 คะแนน: ระดับที่ระบุตัวตนได้จำกัด (Limited) : จำนวนประชากรของประเทศใช้ชื่อนามสกุลเดียวกันจำนวนน้อย",
                            score: 0.5
                        },

                        {
                            id: 19,
                            choiceText: "0.75 คะแนน: ระดับที่ระบุตัวตนได้อย่างมีนัยสำคัญ (Significant): จำนวนประชากรของจังหวัดเล็กๆที่ซึ่งใช้ชื่อนามสกุลเดียวกันน้อยหรือแทบไม่มี",
                            score: 0.75
                        },
                        {
                            id: 20,
                            choiceText: "1 คะแนน: ระดับที่ระบุตัวตนได้อย่างแน่ชัด (Maximum) : จำนวนประชากรของประเทศใช้ข้อมูลวันเกิดและ Email",
                            score: 1
                        }
                    ]
                },

                {
                    subCategoryId: 2,
                    topicText: "ข้อมูลบัตรประชาชน พาสปอร์ตเลขประกันสังคม",
                    description: "",
                    choices: [
                        {
                            id: 21,
                            choiceText: "0.25 คะแนน: ระดับที่ไม่สามารถระบุตัวตนได้แน่ชัด (Negligible) : เมื่อไม่สามารถหาข้อมูลอื่นใดของบุคคลได้หรือเป็นไปไม่ได้ที่จะหาข้อมูลอื่นใดของบุคคลได้อีกเว้นแต่ได้เข้าถึงถังข้อมูลนั้น",
                            score: 0.25
                        },

                        {
                            id: 22,
                            choiceText: "0.75 คะแนน: ระดับที่ระบุตัวตนได้อย่างมีนัยสำคัญ (Significant): การละเมิดทำให้เปิดเผยข้อมูลการระบุตัวตนของบุคคลอื่น ๆ\
                            เพิ่มเติมได้อีก (เช่น เลขที่ประกันสังคมเปิดเผยข้อมูลวันเกิด) และสามารถเชื่อมโยงไปยังข้อมูลอื่น ๆ (เช่น เลขไปรษณีย์หรือ Email)",
                            score: 0.75
                        },

                        {
                            id: 23,
                            choiceText: "1 คะแนน: ระดับที่ระบุตัวตนได้อย่างแน่ชัด (Maximum) : เมื่อมีการเปิดเผยจากถังข้อมูล (ข้อมูลบัตรประจำตัวประชาชน หละชื่อนามสกุล หรือรูปภาพ)",
                            score: 1
                        }                        
                    ]
                },

                {
                    subCategoryId: 3,
                    topicText: "ข้อมูลเบอร์โทรศัพท์/ข้อมูลสถานที่อยู่อาศัย",
                    description: "",
                    choices: [
                        {
                            id: 24,
                            choiceText: "0.25 คะแนน: ระดับที่ไม่สามารถระบุตัวตนได้แน่ชัด (Negligible) : เมื่อพิจารณาจากประชากรของประเทศ เบอร์/ที่อยู่ ไม่ได้ขึ้นทะเบียนในระบบที่เปิดเผยสาธารณะ",
                            score: 0.25
                        },

                        {
                            id: 25,
                            choiceText: "0.5 คะแนน: ระดับที่ระบุตัวตนได้จำกัด (Limited) : เมื่อพิจารณาจากประชากรของจังหวัด เบอร์/ที่อยู่ ไม่ได้ขึ้นทะเบียนในระบบที่เปิดเผยสาธารณะ (แต่ระบุได้จากการติดต่อสื่อสารกับบุคคลนั้นๆ)",
                            score: 0.5
                        },

                        {
                            id: 26,
                            choiceText: "1 คะแนน: ระดับที่ระบุตัวตนได้อย่างแน่ชัด (Maximum) : เมื่อพิจารณาจากประชากรของประเทศ เบอร์/ที่อยู่ ขึ้นทะเบียนในระบบที่เปิดเผยสู่สาธารณะ",
                            score: 1
                        }                       
                    ]
                },

                {
                    subCategoryId: 4,
                    topicText: "E-mail",
                    description: "",
                    choices: [
                        {
                            id: 27,
                            choiceText: "0.25 คะแนน: ระดับที่ไม่สามารถระบุตัวตนได้แน่ชัด (Negligible) : เมื่อ Email ไม่ได้เปิดเผยข้อมูลส่วนบุคคลอื่นใด (เช่น ชื่อ) และไม่ได้ใช้เป็นช่องทางติดต่อหลักในอินเตอร์เน็ต หรือโซเชียลเน็ทเวิร์ค",
                            score: 0.25
                        },

                        {
                            id: 28,
                            choiceText: "0.75 คะแนน: ระดับที่ระบุตัวตนได้อย่างมีนัยสำคัญ (Significant): เมื่อ Email ไม่ได้เปิดเผยข้อมูลส่วนบุคคลอื่นใด (เช่น ชื่อ) แต่ใช้เป็นช่องทางติดต่อหลักในอินเตอร์เน็ต หรือโซเชียลเน็ทเวิร์ค (ค้นหาได้จากเว็บไซต์)",
                            score: 0.75
                        },

                        {
                            id: 29,
                            choiceText: "1 คะแนน: ระดับที่ระบุตัวตนได้อย่างแน่ชัด (Maximum) : เมื่อข้อมูลส่วนบุคคลเปิดเผยชื่อของบุคคล และใช้เป็นช่องทางหลักในอินเทอร์เน็ต หรือโซเชียลเน็ทเวิร์ค (ค้นหาได้จากเว็บไซต์)",
                            score: 1
                        }
                    ]
                },

                {
                    subCategoryId: 5,
                    topicText: "รูปภาพ",
                    description: "",
                    choices: [
                        {
                            id: 30,
                            choiceText: "0.25 คะแนน: ระดับที่ไม่สามารถระบุตัวตนได้แน่ชัด (Negligible) : รูปภาพนั้นคลุมเครือไม่ชัด (เช่น รูปภาพวิดิโอจาก CCTV โดยถ่ายในระยะไกล)",
                            score: 0.25
                        },

                        {
                            id: 31,
                            choiceText: "0.5 คะแนน: ระดับที่ระบุตัวตนได้จำกัด (Limited) : รูปภาพนั้นคลุมเครือไม่ชัด แต่มีข้อมูลเพิ่มเติมที่สามารถระบุตัวตนของบุคคลได้ (เช่น เป็นสถานที่เฉพาะ)",
                            score: 0.5
                        },

                        {
                            id: 32,
                            choiceText: "0.75 คะแนน: ระดับที่ระบุตัวตนได้อย่างมีนัยสำคัญ (Significant): รูปภาพนั้นคลุมเครือไม่ชัด แต่ไม่มีข้อมูลอื่นที่เชื่อมโยงไปยังตัวตนของบุคคลได้",
                            score: 0.75
                        },

                        {
                            id: 33,
                            choiceText: "1 คะแนน: ระดับที่ระบุตัวตนได้อย่างแน่ชัด (Maximum): รูปภาพชัดเจน และสามารถเชื่อมโยงไปยังข้อมูลเพิ่มเติมได้ (เช่น ข้อมูลการเป็นสมาชิกของชมรม หรือ ที่อยู่อาศัย)",
                            score: 1
                        }
                    ]
                },

                {
                    subCategoryId: 6,
                    topicText: "รหัส/นามแฝง/อักษรย่อ",
                    description: "",
                    choices: [
                        {
                            id: 34,
                            choiceText: "0.25 คะแนน: ระดับที่ไม่สามารถระบุตัวตนได้แน่ชัด (Negligible) : เมื่อรหัส/นามแฝงนั้นไม่สามารถเปิดเผยและเชื่อมโยงไปยังข้อมูลส่วนบุคคลของบุคคล เว้นแต่มีสิทธิเข้าถึงสถานที่เก็บข้อมูลนั้น",
                            score: 0.25
                        },

                        {
                            id: 35,
                            choiceText: "0.75 คะแนน: ระดับที่ระบุตัวตนได้อย่างมีนัยสำคัญ (Significant): เมื่อนามแฝงเปิดเผยข้อมูลเกี่ยวกับบุคคล เช่น ชื่อจริง และเชื่อมโยงไปยังข้อมูลส่วนบุคคลอื่นได้ เช่น อีเมล์ของบุคคล",
                            score: 0.75
                        },

                        {
                            id: 36,
                            choiceText: "1 คะแนน: ระดับที่ระบุตัวตนได้อย่างแน่ชัด (Maximum): เมื่อนามแฝงเปิดเผยชื่อเต็มของบุคคลหรือมีการเปิดเผยข้อมูลจากสถานที่เก็บข้อมูล",
                            score: 1
                        }
                    ]
                }
            ]
        },

        {
            categoryText: "เหตุการละเมิดข้อมูลส่วนบุคคล (Circumstance of Breach) : CB",
            subCategory: [
                {
                    subCategoryId: 1,
                    topicText: "การละเมิดความลับของข้อมูลส่วนบุคคล (Confidentiality Breach)",
                    description: "",
                    choices: [
                        {
                            id: 37,
                            choiceText: "0 คะแนน: การละเมิดความลับที่ไม่มีหลักฐานว่ามีการประมวลผลอย่างผิดกฎหมายเกิดขึ้น เช่น ไฟล์เอกสารหรือแลปทอปหายในช่วงส่งต่อ หรืออุปกรณ์ถูกละเมิดโดยไม่ได้ทำลายข้อมูลส่วนบุคคล",
                            score: 0
                        },

                        {
                            id: 38,
                            choiceText: "0.25 คะแนน: ข้อมูลที่เปิดเผยไปยังผู้รับจำนวนหนึ่ง เช่น Email ที่มีข้อมูลส่วนบุคคลถูกส่งไปยังผู้รับผิดราย หรือกรณีที่ลูกค้าสามารถเข้าถึงข้อมูลของลูกค้ารายอื่นได้ผ่านช่องทางออนไลน์",
                            score: 0.25
                        },

                        {
                            id: 39,
                            choiceText: "0.5 คะแนน: ข้อมูลถูกเปิดเผยไปยังผู้รับจำนวนหนึ่งที่ไม่ทราบว่าเป็นผู้ใด เช่น ข้อมูลอัปโหลดบนอืนเทอร์เน็ต ข้อมูลอัปโหลดบน P2P site ลูกจ้างขาย CD ROM \
                            ที่มีข้อมูลลูกค้า การวางระบบเวปไซท์ผิดพลาดจนทำให้ข้อมูลถูกทำให้เข้าถึงได้จากสาธารณะโดยผู้ใช้อินเทอร์เน็ต",
                            score: 0.5
                        }
                    ]
                },

                {
                    subCategoryId: 2,
                    topicText: "การละเมิดความถูกต้องครบถ้วนของข้อมูลส่วนบุคคล (Integrity Breach)",
                    description: "",
                    choices: [
                        {
                            id: 40,
                            choiceText: "0 คะแนน: ข้อมูลมีการเปลี่ยนแปลง แต่ไม่สามารถระบุได้ว่าข้อมูลใดที่ไม่ถูกต้องหรือข้อมูลถูกใช้งานอย่างผิดกฎหมาย เช่น ข้อมูลที่จัดเก็บได้ถูกอัพเดทอย่างไม่ถูกต้อง แต่ได้รับข้อมูลขุดแรกแล้วก่อนมีการเปลี่ยนแปลงในข้อมูล",
                            score: 0
                        },

                        {
                            id: 41,
                            choiceText: "0.25 คะแนน: ข้อมูลมีการเปลี่ยนแปลง และสามารถระบุได้ว่าข้อมูลใดที่ไม่ถูกต้องหรือมีการใช่ข้อมูลถูอย่างผิดกฎหมาย แต่มีความเป็นไปได้ที่จะสำรองข้อมูลกลับมา\
                             เช่นข้อมูลที่มีความจำเป็นต่อการใช้บริการออนไลน์ได้ถูกเปลี่ยน และบุคคลต้องรับบริการผ่านทางออฟไลน์ หรือ ข้อมูลที่มีความสำคัญที่ต้องมีความถูกต้อง (Accuracy) ในระบบของหน่วยงานสุขภาพถูกแก้ไขเปลี่ยนแปลง",
                            score: 0.25
                        },

                        {
                            id: 42,
                            choiceText: "0.5 คะแนน: ข้อมูลที่ถูกแก้ไขเปลี่ยนแปลงและอาจถูกใช้อย่างผิดกฎหมายโดยไม่มีความเป็นไปได้ที่จะกู้ข้อมูลนั้นคืนแล้ว เช่น \
                            ข้อมูลที่มีความจำเป็นต่อการใช้บริการออนไลน์ได้ถูกเปลี่ยนและบุคคลต้องรับบริการผ่านทางออฟไลน์ หรือ ข้อมูลที่มีความสำคัญที่ต้องมีความถูกต้อง (Accuracy) ในระบบของหน่วยงานสุขภาพถูกแก้ไขเปลี่ยนแปลง โดยไม่สามารถกู้คืนข้อมูลได้อีก",
                            score: 0.5
                        }
                    ]
                },

                {
                    subCategoryId: 3,
                    topicText: "การละเมิดความพร้อมใช้งานของข้อมูลส่วนบุคคล (Availability Breach)",
                    description: "",
                    choices: [
                        {
                            id: 43,
                            choiceText: "0 คะแนน: ข้อมูลที่สามารถกู้คืนได้อย่างไม่ยากลำบาก เช่นข้อมูลไฟล์หาย แต่ยังมีข้อมูลสำรองเก็บไว้ หรือกรณีถังข้อมูลไม่สามารถใช้งานได้แต่สามาระกู้ได้จากถังข้อมูลชุดอื่น",
                            score: 0
                        },

                        {
                            id: 44,
                            choiceText: "0.25 คะแนน: ข้อมูลหายชั่วคราว เช่น ถังข้อมูลไม่สามารถใช้งานได้แต่สามาระกู้ได้จากถังข้อมูลชุดอื่น โดยต้องประมวลผลบางประการเพื่อกู้คืน หรือข้อมูลหายแต่ยังสามารถขอจากบุคคลใหม่ได้อีกครั้ง",
                            score: 0.25
                        },

                        {
                            id: 45,
                            choiceText: "0.5 คะแนน: ข้อมูลที่ไม่สามารถเรียกได้ โดยไม่สามารถกู้คืนได้ไม่ว่าจะจากผู้ควบคุมข้อมูลส่วนบุคคลเองหรือจากบุคคล เช่นข้อมูลหายและไม่สามารถขอจากบุคคลใหม่ได้แล้ว",
                            score: 0.5
                        }          
                    ]
                },

                {
                    subCategoryId: 4,
                    topicText: "ความตั้งใจที่ชั่วร้าย (Malicious intent)",
                    description: "",
                    choices: [
                        {
                            id: 46,
                            choiceText: "0.5 คะแนน: การละเมิดเกิดจากความตั้งใจ เช่น ต้องการทำให้ผู้ควบคุมข้อมูลส่วนบุคคลเสียหาย (เช่น ทำให้ระบบความปลอดภัยเสียหาย) และ/หรือ เพื่อทำอันตรายแก่บุคคล \
                            เช่น ลูกจ้างตั้งใจเปิดเผยข้อมูลส่วนบุคคลจากช่องทาง โซเชียลมีเดีย หรือลูกจ้างขายข้อมูลส่วนตัวของลูกค้าให้บริษัทอื่น ผหรือผู้ใช้งานตั้งใจส่งข้อมูลของผู้ใช้งานรายอื่นไปยังสมาชิกครอบครัวของผู้ใช้รายอื่นนั้นเพื่อทำอันตราย",
                            score: 0.5
                        }
                    ]
                }
            ]
        }
    ]
}