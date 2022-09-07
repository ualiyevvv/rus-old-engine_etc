fetch from, the value
of the configuration <code>remote.&lt;origin&gt;.url</code> is consulted
and if there is not any such variable, the value on the <code>URL:</code> line
in <code>$GIT_DIR/remotes/&lt;origin&gt;</code> is used.</p>
</div>
<div class="paragraph">
<p>In order to determine what remote branches to fetch (and
optionally store in the remote-tracking branches) when the command is
run without any refspec parameters on the command line, values
of the configuration variable <code>remote.&lt;origin&gt;.fetch</code> are
consulted, and if there aren&#8217;t any, <code>$GIT_DIR/remotes/&lt;origin&gt;</code>
is consulted and its <code>Pull:</code> lines are used.
In addition to the refspec formats described in the OPTIONS
section, you can have a globbing refspec that looks like this:</p>
</div>
<div class="listingblock">
<div class="content">
<pre>refs/heads/*:refs/remotes/origin/*</pre>
</div>
</div>
<div class="paragraph">
<p>A globbing refspec must have a non-empty RHS (i.e. must store
what were fetched in remote-tracking branches), and its LHS and RHS
must end with <code>/*</code>.  The above specifies that all remote
branches are tracked using remote-tracking branches in
<code>refs/remotes/origin/</code> hierarchy under the same name.</p>
</div>
<div class="paragraph">
<p>The rule to determine which remote branch to merge after
fetching is a bit involved, in order not to break backward
compatibility.</p>
</div>
<div class="paragraph">
<p>If explicit refspecs were given on the command
line of <code>git pull</code>, they are all merged.</p>
</div>
<div class="paragraph">
<p>When no refspec was given on the command line, then <code>git pull</code>
uses the refspec from the configuration or
<code>$GIT_DIR/remotes/&lt;origin&gt;</code>.  In such cases, the following
rules apply:</p>
</div>
<div class="olist arabic">
<ol class="arabic">
<li>
<p>If <code>branch.&lt;name&gt;.merge</code> configuration for the current
branch <code>&lt;name&gt;</code> exists, that is the name of the branch at the
remote site that is merged.</p>
</li>
<li>
<p>If the refspec is a globbing one, nothing is merged.</p>
</li>
<li>
<p>Otherwise the remote branch of the first refspec is merged.</p>
</li>
</ol>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_examples">EXAMPLES</h2>
<div class="sectionbody">
<div class="ulist">
<ul>
<li>
<p>Update the remote-tracking branches for the repository
you cloned from, then merge one of them into your
current branch:</p>
<div class="listingblock">
<div class="content">
<pre>$ git pull
$ git pull origin</pre>
</div>
</div>
<div class="paragraph">
<p>Normally the branch merged in is the HEAD of the remote repository,
but the choice is determined by the branch.&lt;name&gt;.remote and
branch.&lt;name&gt;.merge options; see <a href="git-config.html">git-config</a>(1) for details.</p>
</div>
</li>
<li>
<p>Merge into the current branch the remote branch <code>next</code>:</p>
<div class="listingblock">
<div class="content">
<pre>$ git pull origin next</pre>
</div>
</div>
<div class="paragraph">
<p>This leaves a copy of <code>next</code> temporarily in FETCH_HEAD, but
does not update any remote-tracking branches. Using remote-tracking
branches, the same can be done by invoking fetch and merge:</p>
</div>
<div class="listingblock">
<div class="content">
<pre>$ git fetch origin
$ git merge origin/next</pre>
</div>
</div>
</li>
</ul>
</div>
<div class="paragraph">
<p>If you tried a pull which resulted in complex conflicts and
would want to start over, you can recover with <em>git reset</em>.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_security">SECURITY</h2>
<div class="sectionbody">
<div class="paragraph">
<p>The fetch and push protocols are not designed to prevent one side from
stealing data from the other repository that was not intended to be
shared. If you have private data that you need to protect from a malicious
peer, your best option is to store it in another repository. This applies
to both clients and servers. In particular, namespaces on a server