# 下载

:::: tip
[源代码地址](https://github.com/Ly2JR/wpf-samples/tree/master)
::::

- 开发环境

  - [Visual Studio 2022](https://visualstudio.microsoft.com/zh-hans/vs/)

  - 下载文件

    IIS部署一个空网站，上传下载需要的文件

- 演示

<img  :src="$withBase('/images/wpf/download.gif')" alt="download"/>

- 关键代码

:::: code-group
::: code-group-item HttpClient
```cs{80}
//主机地址
private const string BASE_URL="http://localhost:9090";
//文件大小Byte
private const double ByteSize=1024.00D;
//文件大小Kb
private const double KByteSize=1024D*1024D;
//缓存大小
private const int DEFAULT_BUFFER_SIZE=1024;
//下载文件长度
public string FileLength{get;set;}
//已下载文件长度
public string CurrentLength{get;set;}
//下载文件最大进度
public int MaxProgress{get;set;}
//已下载文件当前进度
public int CurrentProgress{get;set;}

public async void ExecuteDownFile(string fileName){

  var uri=new Uri($"{BASE_URL}/{fileName}");
  var cancellationSource=new CancellationTokenSource(new TimeSpan(0,0,0,0,5000));
  var cancellationToken=cancellationSource.Token;

  using(var httpClient=new HttpClient()){

    var response=await httpClient.GetAsync(uri,cancellationToken);
    if(response.IsSuccessStatusCode){

      var stream=await response.Content.ReadAsStreamAsync();
      if(stream!=null){
        var allFileLength=stream.Length;

        if(allFileLength<ByteSize){
          FileLength=$"{allFileLength}B";
          MaxProgress=(int)allFileLength;
        }
        else if(allFileLength>KByteSize){
          var size=Math.Round(allFileLength/KByteSize,2);
          FileLength=$"{size}MB";
          MaxProgress=(int)allFileLength/1000;
        }else{
          var size=Math.Round(allFileLength/ByteSize,2);
          FileLength=$"{size}KB";
          MaxProgress=(int)allFileLength/1000;
        }

        var savePath=$"{Environment.CurrentDirectory}/{fileName}";
        if(File.Exists(savePath)){
          Fiel.Delete(savePath);
        }

        using(var fileStream=new FileStream(savePath,FileMode.Create,FileAccess.Write)){

          using(var streamReader=new StreamReader(stream)){
            var bufferByte=new byte[DEFAULT_BUFFER_SIZE];
            int startByte=0;

            while(allFileLength>0){

              var downByte=await stream.ReadAsync(bufferByte,0,bufferByte.Length);
              if(downByte==0)break;

              fileStream.Position=startByte;
              await fileStream.WriteAsync(bufferByte,0,bufferByte.Length);

              startByte+=downByte;
              allFileLength-=downByte;

              if(startByte<ByteSize){
                CurrentLength=$"{startByte}";
                CurrentProgress=startByte;
              }
              else if(startByte>KByteSize){
                CurrentLength=$"{Math.Round(startByte/KByteSize,2)}MB";
                CurrentProgress=startByte/1000;
              }else{
                CurrentLength=$"{Math.Round(startByte/ByteSize,2)}KB";
                CurrentProgress=startByte/1000;
              }
              await Task.Delay(1);
            }
          }
          fileStream.Flush();
        }
      }
    }
  }
}
```
:::
::::