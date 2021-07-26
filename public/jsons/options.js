const obj = {
  column: [
    {
      type: 'password',
      label: '密码',
      span: 24,
      display: true,
      prop: '1627279260856_86960'
    },
    {
      type: 'number',
      label: '计数器',
      controls: true,
      span: 24,
      display: true,
      prop: '1627279261532_41043'
    },
    {
      type: 'password',
      label: '密码',
      span: 24,
      display: true,
      prop: '1627279267001_70621'
    },
    {
      type: 'map',
      component: 'avue-input-map',
      label: '地图选择器',
      span: 24,
      display: true,
      prop: '1627279267843_35959'
    },
    {
      type: 'cascader',
      label: '级联选择器',
      span: 24,
      display: true,
      dicData: [
        {
          label: '选项一',
          value: 0,
          children: [
            {
              label: '选项1-1',
              value: 11
            },
            {
              label: '选项1-2',
              value: 12
            }
          ]
        },
        {
          label: '选项二',
          value: '1'
        },
        {
          label: '选项三',
          value: '2'
        }
      ],
      cascaderIndex: 1,
      showAllLevels: true,
      separator: '/',
      props: {
        label: 'label',
        value: 'value'
      },
      prop: '1627279270113_35562'
    },
    {
      type: 'checkbox',
      label: '多选框组',
      dicData: [
        {
          label: '选项一',
          value: '0'
        },
        {
          label: '选项二',
          value: '1'
        },
        {
          label: '选项三',
          value: '2'
        }
      ],
      span: 24,
      display: true,
      props: {
        label: 'label',
        value: 'value'
      },
      prop: '1627279270950_10366'
    },
    {
      type: 'cascader',
      label: '级联选择器',
      span: 24,
      display: true,
      dicData: [
        {
          label: '选项一',
          value: 0,
          children: [
            {
              label: '选项1-1',
              value: 11
            },
            {
              label: '选项1-2',
              value: 12
            }
          ]
        },
        {
          label: '选项二',
          value: '1'
        },
        {
          label: '选项三',
          value: '2'
        }
      ],
      cascaderIndex: 1,
      showAllLevels: true,
      separator: '/',
      props: {
        label: 'label',
        value: 'value'
      },
      prop: '1627279276692_93450'
    }
  ],
  labelPosition: 'left',
  labelSuffix: '：',
  labelWidth: 120,
  gutter: 0,
  menuBtn: true,
  submitBtn: true,
  submitText: '提交',
  emptyBtn: true,
  emptyText: '清空',
  menuPosition: 'center'
};
