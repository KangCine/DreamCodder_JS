const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  
  console.log(person.id); // 문제1: person의 id를 출력해주세용
  console.log(person.firstName + ' ' + person.lastName); // 문제2: person의 fullName을 출력해주세용
  console.log(person.fullName());
  
  const test1 = person.fullName(); // 문제3: 작동이 될까요?
  console.log(test1);
//  const test2 = person[fullName](); // 문제4: 작동이 될까요?
//  console.log(test2);
  const test3 = person["fullName"](); // 문제5: 작동이 될까요?
  console.log(test3);

  const test4 = person.fullName;
  test4();//문제5: 작동이 될까요? 
  // 안될거같아요!
  console.log(test4());
  
  // 문제6: 문제5가 잘 작동했나요? 아니면 작동이 안 되었나요? 이유는 뭘까요? 
  // 작동은 되는데 undefined가 뜹니다! 
  // test4라는 변수에는 firstName과 lastName에 대한 value는 존재하지않고 fullName의 value인
  // function() {
  //     return this.firstName + " " + this.lastName;
  // }
  // 자체를 가지고 있습니다.
  // 따라서 firstName과 lastName을 알려주어야(?) 합니다.
  
  const new_person = {
      firstName: "Brock",
      lastName: "PlayAuto"
  };
  
  // 문제6-2: 작동이 안 되었다면 new_person과 test4를 이용해서
  // new_person의 이름을 반환하는 함수를 만들어 보실래요?
  // (위의 영상에서 안 다룬 개념일 수도 있습니다. 힌트 - .bind 사용해보세용!)
  const test5 = test4.bind(new_person);
  console.log(test5());




  console.log('----------');

  const product_data = {
	data: {
            tax_type: 'TAX',
            product_informations: [
                {
                    type: 'Wear',
                    data: {
                        material: '[상세설명참조]1',
                        is_functional: 'N',
                        color: '[상세설명참조]2',
                        size: '[상세설명참조]3',
                        manufacturer: '[상세설명참조]123',
                        is_import: 'Y',
                        importer: '[상세설명참조]321',
                        made_in: '[상세설명참조]4',
                        washing_method: '[상세설명참조]5',
                        handling_precaution: '[상세설명참조]6',
                        pack_date: '[상세설명참조]',
                        warranty_policy: '[상세설명참조]7',
                        after_service_director: '[상세설명참조]8',
                    },
                },
            ],
            select_options: {
                options: [
                    {
                        values: [
                            {
                                code: '',
                                name: '빨강',
                            },
                            {
                                code: '',
                                name: 'XL',
                            },
                        ],
                    },
                ],
                titles: [
                    {
                        code: '',
                        name: '색상',
                    },
                    {
                        code: '',
                        name: '사이즈',
                    },
                ],
            },
            input_options: [],
            addon_options: [],
        },

}

// 문제7: 위의 상품 데이터의 is_import값을 추출해보세요.
console.log(product_data.data.product_informations[0].data.is_import);
// 문제8: 위의 상품 데이터에서 입력형 옵션 (select_options) 에서 "XL"를 추출해보세요.
console.log(product_data.data.select_options.options[0].values[1].name);