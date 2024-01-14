> 这是一个简单的修改 HOST 的工具，个人使用，逻辑比较简单

# 新增一个记录

通过 `add`函数新增一个 host 记录：

```javascript
const hosttool = require('qzx-host-tool');
hosttool.add('192.168.1.23', 'www.test.com');
```

# 删除一个记录

通过 `remove`函数删除 host 记录，但凡是符合记录的都会被删除:

```javascript
const hosttool = require('qzx-host-tool');
hosttool.remove('192.168.1');
hosttool.remove('baidu.com');
```

# 更新一个记录

通过 `update`函数更新记录，符合记录的 IP 或 Host 都会被更新

```javascript
const hosttool = require('qzx-host-tool');
hosttool.update('192.168.1');
hosttool.update('baidu.com');
```
