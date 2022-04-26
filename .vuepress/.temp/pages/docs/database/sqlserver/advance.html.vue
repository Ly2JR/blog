<template><h1 id="高级语法" tabindex="-1"><a class="header-anchor" href="#高级语法" aria-hidden="true">#</a> 高级语法</h1>
<h2 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-database-transact-sql?view=sql-server-ver15&amp;tabs=sqlpool" target="_blank" rel="noopener noreferrer">CREATE DATABASE<ExternalLinkIcon/></a></h2>
<p>CREATE DATABASE语句用于创建新的数据库</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> dnname<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“SQLDocs”的数据库</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> SQLDocs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="create-table" tabindex="-1"><a class="header-anchor" href="#create-table" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-table-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">CREATE TABLE<ExternalLinkIcon/></a></h2>
<p>CREATE TABLE语句用于创建数据库中的表</p>
<ul>
<li>语法</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>column_name参数规定表中列的名称</p>
<p>data_type参数规定列的<a href="https://docs.microsoft.com/zh-cn/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">数据类型<ExternalLinkIcon/></a>(例如nvarchar,integer,decimal,date等)</p>
<p>size参数规定表中列的最大长度</p>
</div>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> table_name
<span class="token punctuation">(</span>
    column_name1 data_type<span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">,</span>
    column_name2 data_type<span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">,</span>
    column_name3 data_type<span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>    
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“WebSites”的表结构</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> WebSites
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span> <span class="token punctuation">,</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url nvarchar<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    alexa <span class="token keyword">int</span><span class="token punctuation">,</span>
    country nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="constranints" tabindex="-1"><a class="header-anchor" href="#constranints" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/relational-databases/system-information-schema-views/table-constraints-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">CONSTRANINTS<ExternalLinkIcon/></a></h2>
<p>Constraints约束用于规定表中的数据规则。</p>
<p>如果存在违反约束的数据行为，行为会被约束终止。</p>
<p>约束可以在创建表时规定，或者在创建表之后规定。</p>
<ul>
<li>语法</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>NOT NULL - 指示某列不能存储<code>NULL</code>值</p>
<p>UNIQUE - 保证某列的每行必须有<code>唯一</code>值,允许<code>NULL</code>值</p>
<p>PRIMARY KEY - <code>NOT NULL</code>和<code>UNIQUE</code>的结合。确保某列(或两个列多个列的结合)有唯一标识，有助于更容易更快速地找到表中的一个特定记录</p>
<p>FOREIGN KEY - 保证一个表中的数据匹配另一个表中的值的参照完整性</p>
<p>CHECK - 保证列中的值符合指定的条件</p>
<p>DEFAULT - 规定没有给列赋值时的默认值</p>
</div>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> table_name
<span class="token punctuation">(</span>
    column_name1 data_type<span class="token punctuation">(</span>size<span class="token punctuation">)</span> constraint_name<span class="token punctuation">,</span>
    column_name2 data_type<span class="token punctuation">(</span>size<span class="token punctuation">)</span> constraint_name<span class="token punctuation">,</span>
    column_name3 data_type<span class="token punctuation">(</span>size<span class="token punctuation">)</span> constraint_name<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="not-null" tabindex="-1"><a class="header-anchor" href="#not-null" aria-hidden="true">#</a> NOT NULL</h3>
<p>NOT NULL约束列不接受<code>NULL</code>值</p>
<p>NOT NULL约束强制字段始终包含值。意味着，如果不向字段添加值，就无法插入新记录或者更新记录。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-SQL ext-SQL line-numbers-mode"><pre v-pre class="language-SQL"><code>ALTER TABLE table_name ALTER COLUMN column_name data_type(size) constraint_name;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“WebSites”的表结构，并对“name”列添加<code>NOT NULL</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> WebSites
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    url nvarchar<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    alexa <span class="token keyword">int</span> <span class="token keyword">DEFAULT</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    country nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，对“name”列添加<code>NOT NULL</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites 
<span class="token keyword">ALTER</span> <span class="token keyword">COLUMN</span> name nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-default-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">DEFAULT<ExternalLinkIcon/></a></h3>
<p>DEFAULT约束用于向列中插入默认值。</p>
<p>如果没有规定其他值，那么会将默认值添加到所有的新记录。</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> contraint_name 
<span class="token keyword">DEFAULT</span><span class="token punctuation">(</span>default_value<span class="token punctuation">)</span>
<span class="token keyword">FOR</span> column_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“WebSites”的表结构，并对“alexa”列添加<code>DEFAULT</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> WebSites
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url nvarchar<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    alexa <span class="token keyword">int</span> <span class="token keyword">DEFAULT</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    country nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，对“alexa”列添加<code>DEFAULT</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> def_alexa
<span class="token keyword">DEFAULT</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">For</span> alexa<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，已添加的“def_alexa”约束进行删除</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites
<span class="token keyword">ALTER</span> <span class="token keyword">COLUMN</span> alexa <span class="token keyword">DROP</span> <span class="token keyword">DEFAULT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="unique" tabindex="-1"><a class="header-anchor" href="#unique" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/relational-databases/tables/unique-constraints-and-check-constraints?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">UNIQUE<ExternalLinkIcon/></a></h3>
<p>UNIQUE约束唯一标识数据库表中的每条记录</p>
<p>UNIQUE和PRIMARY KEY约束均为列或列集合提供了唯一性的保证</p>
<p>PRIMARY KEY 约束拥有自动定义UNIQUE约束</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>UNIQUE 允许存在<code>NULL</code>值，而PRIMARY KEY <strong>不</strong>允许存在<code>NULL</code>值</p>
<p>每个表可以有多个UNIQUE约束，但是只能有一个PRIMARY KEY约束</p>
</div>
<ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="add Constraint">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> constraint_name <span class="token keyword">UNIQUE</span><span class="token punctuation">(</span>column_name1<span class="token punctuation">,</span>column_name2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="remove Constraint">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name 
<span class="token keyword">DROP</span> <span class="token keyword">CONSTRAINT</span> constraint_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“WebSites”的表结构，并对“url”列添加<code>UNIQUE</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> WebSites
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url nvarchar<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span> <span class="token keyword">UNIQUE</span><span class="token punctuation">,</span>
    alexa <span class="token keyword">int</span> <span class="token keyword">DEFAULT</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    country nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，并对“url”列添加<code>UNIQUE</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites
<span class="token keyword">ALTER</span> <span class="token keyword">CONSTRAINT</span> UQ_url <span class="token keyword">UNIQUE</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，并对“url”列和“name”添加<code>UNIQUE</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites 
<span class="token keyword">ALTER</span> <span class="token keyword">CONSTRAINT</span> UQ_url <span class="token keyword">UNIQUE</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，已添加的“UQ_url”约束进行删除</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites
<span class="token keyword">DROP</span> <span class="token keyword">CONSTRAINT</span> UQ_url<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="primary-key" tabindex="-1"><a class="header-anchor" href="#primary-key" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/relational-databases/tables/primary-and-foreign-key-constraints?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">PRIMARY KEY<ExternalLinkIcon/></a></h3>
<p>PRIMARY KEY 约束唯一标识数据库表中的每一条记录</p>
<p>主键必须包含唯一的值</p>
<p>主键列不能包含<code>NULL</code>值</p>
<p>每个表都应该有一个主键，并且每个表只有一个主键</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> constraint_name <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>column_name1<span class="token punctuation">,</span>column_name2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“WebSites”的表结构，并对“id”列添加<code>PRIMARY KEY</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> WebSites
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    url nvarchar<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    alexa <span class="token keyword">int</span> <span class="token keyword">DEFAULT</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    country nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，对“id”列添加<code>PRIMARY KEY</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites 
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> pk_id <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，对“name”列和“url”列添加<code>PRIMARY KEY</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites 
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> pk_name_url <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面的SQL语句在已存在的“WebSites”表，对已添加的“pk_id”约束进行删除</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites
<span class="token keyword">DROP</span> <span class="token keyword">CONSTRAINT</span> pk_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="foreign-key" tabindex="-1"><a class="header-anchor" href="#foreign-key" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/relational-databases/tables/create-foreign-key-relationships?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">FOREIGN KEY<ExternalLinkIcon/></a></h3>
<p>一个表中的FOREIGN KEY指向另一个表中的UNIQUE KEY（唯一约束的键）</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name1
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> constraint_name
<span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>column_name1<span class="token punctuation">,</span>column_name2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token keyword">REFERENCES</span> table_name2<span class="token punctuation">(</span>column_name1<span class="token punctuation">,</span>column_name2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“Access_Log”的表结构，并对“site_id”列添加<code>FOREIGN KEY</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Access_Log
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>site_id<span class="token punctuation">]</span> <span class="token keyword">int</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token keyword">REFERENCES</span> WebSites<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token keyword">int</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>country<span class="token punctuation">]</span> nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面的SQL语句在已存在的“Access_Log”表，对“site_id”列添加<code>FOREIGN KEY</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> Access_Log 
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> fk_site_id
<span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>site_id<span class="token punctuation">)</span>
<span class="token keyword">REFERENCES</span> WebSites<span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>下面的SQL语句在已存在的“Access_Log”表，对已添加的“fk_site_id”约束进行删除</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> Access_Log
<span class="token keyword">DROP</span> <span class="token keyword">CONSTRAINT</span> fk_site_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="check" tabindex="-1"><a class="header-anchor" href="#check" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/relational-databases/tables/unique-constraints-and-check-constraints?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">CHECK<ExternalLinkIcon/></a></h3>
<p>CHECK 约束是用于限制中的值的范围</p>
<p>如果对单个列定义CHECK约束，那么该列只允许特定的值</p>
<p>如果对一个表定义CHECK约束，那么此约束会基于行中其他列的值在特定的列中对值进行限制</p>
<ul>
<li>语法</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> contraint_name
<span class="token keyword">CHECK</span> <span class="token punctuation">(</span>column_name operate condition<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“WebSites”的表结构，并对“country”列添加<code>CHECK</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> WebSites
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url nvarchar<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    alexa <span class="token keyword">int</span><span class="token punctuation">,</span>
    country nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">CHECK</span><span class="token punctuation">(</span>country <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">'CN'</span><span class="token punctuation">,</span><span class="token string">'USA'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面的SQL语句创建一个名为“WebSites”的表结构，并对“country”列和“alexa”列添加<code>CHECK</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> WebSites
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url nvarchar<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    alexa <span class="token keyword">int</span><span class="token punctuation">,</span>
    country nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">CONSTRAINT</span> chk_WebSite <span class="token keyword">CHECK</span><span class="token punctuation">(</span>country <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">'CN'</span><span class="token punctuation">,</span><span class="token string">'USA'</span><span class="token punctuation">)</span> <span class="token operator">AND</span> Alexa<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>下面的SQL语句在已存在的“Access_Log”表，对“country”列添加<code>CHECK</code>约束</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> Access_Log 
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> chk_country
<span class="token keyword">CHECK</span> <span class="token punctuation">(</span>country <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">'CN'</span><span class="token punctuation">,</span><span class="token string">'USA'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>下面的SQL语句在已存在的“Access_Log”表，对已添加的“chk_country”约束进行删除</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> Access_Log
<span class="token keyword">DROP</span> <span class="token keyword">CONSTRAINT</span> chk_country<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="create-index" tabindex="-1"><a class="header-anchor" href="#create-index" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-index-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">CREATE INDEX<ExternalLinkIcon/></a></h2>
<p>CREATE INDEX语句用于在表中创建索引。</p>
<p>在不读取整个表的情况下，索引使数据库应用程序可以更快地查找数据。</p>
<p>您可以在表中创建索引，以便更加快速高效地查询数据。</p>
<p>用户无法看到索引，它们只能被用来加速搜索/查询。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>更新一个包含索引的表需要比更新一个没有索引的表花费更多的时间，这是由于索引本身也需要更新。
因此，理想的做法是仅仅在常常被搜索的列(以及表)上面创建索引。</p>
</div>
<ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="index">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--在表上创建一个简单的索引。允许使用重复值</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> index_name
<span class="token keyword">ON</span> table_name<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--在表上创建一个简单的索引,如果索引名存在则更新。允许使用重复值</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> index_name
<span class="token keyword">ON</span> table_name<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span>
<span class="token keyword">WITH</span><span class="token punctuation">(</span>DROP_EXISTING<span class="token operator">=</span><span class="token keyword">ON</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="unique index">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--在表上创建一个唯一的所应。不允许使用重复的值：唯一的索引意味着两个行不能拥有相同的索引值。</span>
<span class="token keyword">CREATE</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> index_name
<span class="token keyword">ON</span> table_name<span class="token punctuation">(</span>column_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="drop index">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--在表上删除创建的一个索引</span>
<span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> index_name
<span class="token keyword">ON</span> table_name<span class="token punctuation">;</span>

<span class="token comment">--删除多个索引</span>
<span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> index_name1 <span class="token keyword">ON</span> table_name1<span class="token punctuation">,</span>
index_name2 <span class="token keyword">ON</span> table_name2<span class="token punctuation">,</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
index_namen <span class="token keyword">ON</span> table_namen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>示例</li>
</ul>
<p>下面的SQL语句在已存在的“WebSite”表，对“name”列添加<code>UNIQUE INDEX</code>索引</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">INDEX</span> IX_Name
<span class="token keyword">ON</span> WebSite<span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面的SQL语句在已存在的“WebSite”表，对“name”列和“url”列添加<code>INDEX</code>索引</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> IX_NameUrl
<span class="token keyword">ON</span> WebSite<span class="token punctuation">(</span>name<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面的SQL语句在已存在的“WebSite”表，对已添加的“IX_NameUrl”索引进行删除</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> IX_NameUrl <span class="token keyword">ON</span> WebSite<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="drop" tabindex="-1"><a class="header-anchor" href="#drop" aria-hidden="true">#</a> DROP</h2>
<p>DROP语句，可以轻松地删除索引、表和数据库。</p>
<ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="index">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> index_name <span class="token keyword">ON</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="table">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="truncate">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--快速清除表内的数据</span>
<span class="token keyword">TRUNCATE</span> <span class="token keyword">TABLE</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="database">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> db_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="alter-table" tabindex="-1"><a class="header-anchor" href="#alter-table" aria-hidden="true">#</a> ALTER TABLE</h2>
<p>ALTER TABLE语句用于在已有的表中添加、删除或者修改列</p>
<ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="add">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--在已有表中添加新的列</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name
<span class="token keyword">ADD</span> column_name data_type<span class="token punctuation">(</span>data_size<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--在已有表中更改列的数据类型</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name
<span class="token keyword">ALTER</span> <span class="token keyword">COLUMN</span> column_name data_type<span class="token punctuation">(</span>data_size<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="drop">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> table_name
<span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> column_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句在已有的“WebSites”表中,添加新的“cMemo”列</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites
<span class="token keyword">ADD</span> cMemo nvarchar<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输出结果为：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
<th style="text-align:left">cMemo</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
<td style="text-align:left">NULL</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
<td style="text-align:left">NULL</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">20</td>
<td style="text-align:left">CN</td>
<td style="text-align:left">NULL</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
<td style="text-align:left">NULL</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句在已存在的“WebSites”表中，改变“cMemo”列的数据类型。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites
<span class="token keyword">ALTER</span> <span class="token keyword">COLUMN</span> cMemo <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下面的SQL语句在已有的“WebSites”表中,删除“cMemo”列</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> WebSites
<span class="token keyword">DROP</span> <span class="token keyword">COLUMN</span> cMemo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="auto-increment" tabindex="-1"><a class="header-anchor" href="#auto-increment" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-table-transact-sql-identity-property?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">AUTO INCREMENT<ExternalLinkIcon/></a></h2>
<p>AUTO INCREMENT会在新记录插入表中时生成一个唯一的数字</p>
<ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“WebSites”的表结构，并对“id”列设置<code>AUTO INCREMENT</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> WebSites
<span class="token punctuation">(</span>
    id <span class="token keyword">int</span> <span class="token keyword">identity</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    name nvarchar<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url nvarchar<span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    alexa <span class="token keyword">int</span><span class="token punctuation">,</span>
    country nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/statements/alter-view-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">VIEW<ExternalLinkIcon/></a></h2>
<p>VIEW视图是可视化的表。</p>
<p>在SQL中，视图是基于SQL语句的结果集的可视化表。</p>
<p>视图包含行和列，就像一个真实的表。视图中的字段就是来自一个或多个数据库中的真实表中的字段。</p>
<p>您可以向视图添加SQL函数、WHERE以及JOIN语句，也可以呈现数据，就像这些数据来自于某个单一的表一样。</p>
<div class="language-tip ext-tip line-numbers-mode"><pre v-pre class="language-tip"><code>视图总是显示最新的数据！每当用户查询视图时，数据库引擎通过使用视图的SQL语句重建数据。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>语法</li>
</ul>
<CodeGroup>
<CodeGroupItem title="Create">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> view_name
<span class="token keyword">AS</span>
    <span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token keyword">FROM</span> table_name
    <span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span>
GO
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Alter">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">VIEW</span> view_name
<span class="token keyword">AS</span>
    <span class="token keyword">SELECT</span> column_name<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    <span class="token keyword">FROM</span> table_name
    <span class="token keyword">WHERE</span> condition<span class="token punctuation">;</span>
GO
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Drop">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> view_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<ul>
<li>示例</li>
</ul>
<p>下面的SQL语句创建一个名为“vWeb”的视图</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> vWeb
<span class="token keyword">AS</span>
    <span class="token keyword">SELECT</span>  id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>url<span class="token punctuation">,</span>alexa<span class="token punctuation">,</span>country
    <span class="token keyword">FROM</span> WebSites<span class="token punctuation">;</span>
GO
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>下面的SQL语句修改“vWeb”的视图</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">VIEW</span> vWeb
<span class="token keyword">AS</span>
    <span class="token keyword">SELECT</span>  WebSites<span class="token punctuation">.</span>id<span class="token punctuation">,</span>WebSites<span class="token punctuation">.</span>name<span class="token punctuation">,</span>WebSites<span class="token punctuation">.</span>url<span class="token punctuation">,</span>WebSites<span class="token punctuation">.</span>alexa<span class="token punctuation">,</span>WebSites<span class="token punctuation">.</span>country<span class="token punctuation">,</span>
    Access_Log<span class="token punctuation">.</span>count
    <span class="token keyword">FROM</span> WebSites
    <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Access_Log
    <span class="token keyword">ON</span> WebSites<span class="token punctuation">.</span>id<span class="token operator">=</span>Access_Log<span class="token punctuation">.</span>site_id
GO
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>下面的SQL语句删除“vWeb”的视图</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">VIEW</span> vWeb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/functions/date-and-time-data-types-and-functions-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">DATE<ExternalLinkIcon/></a></h2>
<p>当我们处理日期时，最难的任务恐怕是确保所插入的日期的格式，与数据库中日期列的格式相匹配。</p>
<p>只要您的数据包含的只是日期部分，运行查询就不会出现问题。但是如果涉及时间部分，情况就有点复杂了。</p>
<p>在讨论日期查询的复杂性之前，先看看最重要的内建日期处理函数。</p>
<ul>
<li>SQL Server Date函数</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">函数</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://docs.microsoft.com/zh-cn/sql/t-sql/functions/getdate-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">GETDATE()<ExternalLinkIcon/></a></td>
<td style="text-align:left">返回当前的日期和时间</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://docs.microsoft.com/zh-cn/sql/t-sql/functions/datepart-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">DATEPART()<ExternalLinkIcon/></a></td>
<td style="text-align:left">返回日期/时间的单独部分</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://docs.microsoft.com/zh-cn/sql/t-sql/functions/dateadd-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">DATEADD()<ExternalLinkIcon/></a></td>
<td style="text-align:left">在日期中添加或减去指定的时间间隔</td>
</tr>
<tr>
<td style="text-align:left">[DATEDIFF()]](<a href="https://docs.microsoft.com/zh-cn/sql/t-sql/functions/datediff-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/zh-cn/sql/t-sql/functions/datediff-transact-sql?view=sql-server-ver15<ExternalLinkIcon/></a>)</td>
<td style="text-align:left">返回两个日期之间的时间</td>
</tr>
<tr>
<td style="text-align:left">[CONVERT]](<a href="https://docs.microsoft.com/zh-cn/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/zh-cn/sql/t-sql/functions/cast-and-convert-transact-sql?view=sql-server-ver15<ExternalLinkIcon/></a>)</td>
<td style="text-align:left">用不同的格式显示日期/时间</td>
</tr>
</tbody>
</table>
<ul>
<li>示例</li>
</ul>
<p>“Orders”表数据
|OrderId|ProductName|OrderDate|OrderDateTime|
|:-|:-|:-|
|1|Geitost|2008-11-11|2008-11-11 13:24:44|
|2|Camembert Pierrot|2008-11-09|2008-11-09 15:45:21|
|3|Mozzarella di Giovanni|2008-11-11|2008-11-11 11:12:01|
|4|Mascarpone Faboli|2008-10-29|2008-10-29 14:56:59|</p>
<p>下面的SQL语句在已经存在的“Orders”的表，对“OrderDate”列进行查询</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> OrderDate<span class="token operator">=</span><span class="token string">'2008-11-11'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>结果集如下所示：
|OrderId|ProductName|OrderDate|OrderDateTime|
|:-|:-|:-|
|1|Geitost|2008-11-11|2008-11-11 13:24:44|
|3|Mozzarella di Giovanni|2008-11-11|2008-11-11 11:12:01|</p>
<p>下面的SQL语句在已经存在的“Orders”的表，对“OrderDateTime”列进行查询</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> OrderDateTime<span class="token operator">=</span><span class="token string">'2008-11-11 00:00:00'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>那么将得不到结果。因为表中”OrderDateTime“列没有”2008-11-11 00：00：00“日期。可以使用内置函数<code>CONVERT</code>处理</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> Orders <span class="token keyword">WHERE</span> <span class="token keyword">CONVERT</span><span class="token punctuation">(</span>nvarchar<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>OrderDateTime<span class="token punctuation">,</span><span class="token number">121</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">'2008-11-11'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> <a href="https://docs.microsoft.com/zh-cn/sql/t-sql/language-elements/null-and-unknown-transact-sql?view=sql-server-ver15" target="_blank" rel="noopener noreferrer">NULL<ExternalLinkIcon/></a></h2>
<p>NULL值代表遗漏的未知数据。</p>
<p>默认地，表的列可以存放NULL值。</p>
<p>如果表中的某个列是可选的，那么在不向该列添加值的情况下插入新记录或者更新已有的记录。这意味着该字段将以NULL值保存。</p>
<p>NULL值的处理方式与其他值不同。</p>
<p>NULL用户未知的或不适用的值的占位符</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>NULL无法与除本身之外的其他值比较；它们是不等价的。</p>
<p>可以通过ISNULL()函数设置一个默认值。</p>
</div>
<ul>
<li>示例</li>
</ul>
<p>“WebSites”表数据</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">QQ</td>
<td style="text-align:left"><a href="https://www.QQ.com/" target="_blank" rel="noopener noreferrer">https://www.QQ.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<p>下面的SQL语句通过<code>IS NULL</code>、<code>IS NOT NULL</code>、<code>ISNULL</code>方式对”alexa“列进行查询。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--IS NULL</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span>  WebSites <span class="token keyword">WHERE</span> alexa <span class="token operator">IS</span> <span class="token boolean">NULL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>结果集如下所示：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">QQ</td>
<td style="text-align:left"><a href="https://www.QQ.com/" target="_blank" rel="noopener noreferrer">https://www.QQ.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--IS NOT NULL</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span>  WebSites <span class="token keyword">WHERE</span> alexa <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>结果集如下所示：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Google</td>
<td style="text-align:left"><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">https://www.google.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">1</td>
<td style="text-align:left">USA</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">TaoBao</td>
<td style="text-align:left"><a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">13</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Facebook</td>
<td style="text-align:left"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">3</td>
<td style="text-align:left">USA</td>
</tr>
</tbody>
</table>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">--ISNULL</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span>  WebSites <span class="token keyword">WHERE</span> ISNULL<span class="token punctuation">(</span>alexa<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>结果集如下所示：</p>
<table>
<thead>
<tr>
<th style="text-align:left">id</th>
<th style="text-align:left">name</th>
<th style="text-align:left">url</th>
<th style="text-align:left">alexa</th>
<th style="text-align:left">country</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">WeiBo</td>
<td style="text-align:left"><a href="https://www.weibo.com/" target="_blank" rel="noopener noreferrer">https://www.weibo.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">CN</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">QQ</td>
<td style="text-align:left"><a href="https://www.QQ.com/" target="_blank" rel="noopener noreferrer">https://www.QQ.com/<ExternalLinkIcon/></a></td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">CN</td>
</tr>
</tbody>
</table>
</template>
