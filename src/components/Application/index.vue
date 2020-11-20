<template>
    <el-container>
        <el-header>颜色转换器</el-header>
        <el-main>
            <div class="application-container">
                <h2>RGB颜色值转换为十六进制颜色码：</h2>
                <el-input v-model="valR" placeholder="请输入内容"></el-input>
                <el-input v-model="valG" placeholder="请输入内容"></el-input>
                <el-input v-model="valB" placeholder="请输入内容"></el-input>
                <el-button type="primary" @click="RGBToHex">转换</el-button>
                <span>{{ hexVal }}</span>
                <div class="color-block" :style="{ backgroundColor: hexVal }" />
                <h2>十六进制颜色码转换为RGB颜色值：</h2>
                <el-input v-model="hexColor" placeholder="请输入内容"></el-input>
                <el-button type="primary" @click="hexToRGB">转换</el-button>
                <span>{{ rgbStr }}</span>
                <div class="color-block" :style="{ backgroundColor: rgbStr }" />
                <h2>颜色码对照表</h2>
                <el-table
                    :data="tableData"
                    style="width: 100%"
                >
                    <el-table-column
                        prop="color"
                        label="颜色"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="english"
                        label="英文代码"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="chinese"
                        label="形象描述">
                    </el-table-column>
                    <el-table-column
                        prop="hex"
                        label="十六进制">
                    </el-table-column>
                    <el-table-column
                        prop="rgb"
                        label="RGB">
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'application',
    props: {
    },
    data() {
        return {
            tableData: [{
                color: '',
                english: '',
                chinese: '',
                hex: '',
                rgb: '',
            }],
            hexVal: '#333333',
            valR: 0,
            valG: 0,
            valB: 0,
            hexColor: '',
            rgbStr: '',
        }
    },
    methods: {
        RGBToHex() {
            // rgb => 16
            let strHex = '#';
            [this.valR, this.valG, this.valB].forEach((val) => {
                let hex = Number(val).toString(16);
                console.log('hex', typeof val)
                if (hex.length < 2) {
                    hex = '0' + hex;    
                }
                strHex += hex;
            });
            this.hexVal = strHex;
        },
        hexToRGB() {
            this.hexColor = this.hexColor.toLowerCase();
            if (this.hexColor.length === 4) {
                var sColorNew = "#";
                    for (var i=1; i<4; i+=1) {
                        sColorNew += this.hexColor.slice(i, i+1).concat(this.hexColor.slice(i, i+1));    
                    }
                    this.hexColor = sColorNew;
            }
            // 处理六位的颜色值
            const sColorChange = [];
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + this.hexColor.slice(i, i+2)));    
            }
            this.rgbStr =  "RGB(" + sColorChange.join(",") + ")";
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.application-container {
    .color-block {
        width: 100px;
        height: 100px;
    }
}
</style>
