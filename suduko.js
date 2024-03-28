
    function suduko(){
        var grid=Array(9).fill().map(()=>Array(9).fill(0))
        var bool=Array(9).fill(false)
        for(var i=0;i<9;i++){
            var check=true;
            while(check){
                var rand=Math.floor(Math.random()*9);
                if(!bool[rand]){
                    grid[0][i]=rand+1;
                    bool[rand]=true;
                    check=false;
                }
            }
        }
        console.log("hi");
        gridGenerator(grid,1,0);
        
    }

    function printGrid(grid){
    for(var row of grid){
        console.log(row.join(" "))
    }
    }

    function gridGenerator(grid,row,col){
        if(row==9){
            printGrid(grid);
            return true;
        }
        if(col==9) return gridGenerator(grid,row+1,0);

        for(let i=0;i<9;i++){
            if(isValid(grid,row,col,i+1)){
                grid[row][col]=i+1;
                if(gridGenerator(grid,row,col+1)) return true;
                grid[row][col]=0;
            }
        }
        return false;
    }

    function isValid(grid,row,col,curr){
        //row check
        for (let i = 0; i < col; i++) {
            if (grid[row][i] === curr) return false;
        }
        // Column check
        for (let i = 0; i < row; i++) {
            if (grid[i][col] === curr) return false;
        }
        // 3X3 check
        let r = row - (row % 3);
        let c = col - (col % 3);
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                if (grid[i][j] === curr) return false;
            }
        }
        return true;

    }

    //calling suduko function
    suduko()